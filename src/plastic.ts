/* eslint-disable no-console */
import {existsSync} from 'node:fs'
import util from 'util'
import {exec as execNonPromise} from 'child_process'
const execAsync = util.promisify(execNonPromise)

export async function cm(params: string): Promise<void> {
  console.log(`> cm ${params}`)

  try {
    let exitCode = -1
    const command = execAsync(`cm ${params}`)
    command.child.on('exit', (code: number) => (exitCode = code))
    const {stdout, stderr} = await command
    console.log(stdout)
    console.log(stderr)
    if (exitCode !== 0) {
      throw new Error(`cm exited with code ${exitCode}`)
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

function workspaceNameForDirectory(directory: string): string {
  directory = directory.replace('/', '\\')
  directory = directory.replace(':', '_')
  return directory
}

async function createAnonymousWorkspace(): Promise<void> {
  // check if workspace already exists in this directory
  // TODO getworkspacefrompath could be used
  if (existsSync('.plastic')) return

  const name = workspaceNameForDirectory(process.cwd())
  await cm(`workspace create ${name} .`)
}

export async function checkoutRepo(
  repository: string,
  branch = '/main'
): Promise<void> {
  await createAnonymousWorkspace()
  await cm(`switch br:${branch} --repository=${repository}`)
  // TODO: check if below is actually needed - it seems that the above command does it
  await cm(`update`)
}
