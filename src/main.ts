import * as core from '@actions/core'
import {checkoutRepo} from './plastic'

async function run(): Promise<void> {
  try {
    const repository: string = core.getInput('repository')
    const branch: string = core.getInput('branch') || '/main'

    await checkoutRepo(repository, branch)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
