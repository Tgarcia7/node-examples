import * as fs from 'fs'
import * as path from 'path'

const __dirname = new URL('.', import.meta.url).pathname

// Create dir if not exists (async)
async function createDir(newDir) {
  const directoryPath = path.normalize(path.join(__dirname, newDir))

  try {
    await fs.promises.access(directoryPath)
  } catch (error) {
    fs.promises.mkdir(directoryPath)
  }
}

// Create temp dir (callbacks) 
function createTempDir() {
  return new Promise((resolve, reject) => {
    const directoryPath = path.normalize(path.join(__dirname, path.sep))

    fs.mkdtemp(directoryPath, (err, directory) => {
      if (err) reject(err)

      resolve(directory)
    })
  })
}

// Removes temp dir (async) 
async function removeTempDir(tempDirectory) {
  const directoryPath = path.normalize(tempDirectory)

  try {
    setTimeout(() => fs.promises.rmdir(directoryPath), 1500)
  } catch (error) {
    writeLog('error', error)
  }
}

// Create log file if not exists
async function createLogFile() {
  const fileLocation = path.join(__dirname, 'logs', 'log.txt')

  try {
    await fs.promises.access(fileLocation)
  } catch {
    const datetime = formatDate(new Date())
    await fs.promises.writeFile(fileLocation, `Log file - ${datetime}\n___________\n`)
  }
}

// Writes in log file
async function writeLog(code, message) {
  const fileLocation = path.join(__dirname, 'logs', 'log.txt')
  const datetime = formatDate(new Date())
  await fs.promises.appendFile(fileLocation, `\n[${datetime}] [${code}]: ${message}\n`)
}

// Read log
function formatDate(date) {
  const d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    h = d.getHours(),
    s = d.getSeconds()

  if (month.length < 2)
    month = '0' + month
  if (day.length < 2)
    day = '0' + day

  return `${[year, month, day].join('-')} ${h}:${s}`
}

(async function() {
  try {
    await createDir('logs')
    await createLogFile()
  
    createDir('//downloads/')
    
    const tempDirLocation = await createTempDir()
    removeTempDir(tempDirLocation)
  
    writeLog('success', 'App started correctly')
    console.info('Checkout /logs to see the results')
  } catch (error) {
    console.info('ERROR>>>', error)
  }
})()
