import {checkoutRepo, getChangeset} from './plastic'

async function run(): Promise<void> {
  process.chdir('V:/aig/wkspaces/The_Darkest_Ballad')
  //await checkoutRepo('TestPlastic@ShrineOfChaos@cloud')
  const cs = await getChangeset()
  // eslint-disable-next-line no-console
  console.log(cs)
}

run()
