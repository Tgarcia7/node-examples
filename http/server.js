import * as https from 'https'

const options = {
  hostname: 'pokeapi.co',
  path: '/api/v2/pokemon/ditto',
  port: 443,
  method: 'GET'
}

const req = https.request(options, res => {
  console.info(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
