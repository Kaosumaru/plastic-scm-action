import {checkoutRepo} from './plastic'

async function run(): Promise<void> {
  process.chdir('wk')
  await checkoutRepo('TestPlastic@ShrineOfChaos@cloud')
}

run()
