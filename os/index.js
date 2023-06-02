import * as os from 'os'

(() => {
  const osInfo = {
    arch: os.arch(),
    cpus: os.cpus().length,
    homedir: os.homedir(),
    hostname: os.hostname(),
    platform: os.platform(),
    tmpdir: os.tmpdir(),
    type: os.type(),
    'uptime (days)': os.uptime() / 60 / 60 / 24,
    'uptime (hours)': os.uptime() / 60 / 60,
    userInfo: os.userInfo()
  }

  console.info('Environment', process.env)
  console.info('\nOS info', osInfo)
})()
