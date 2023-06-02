
import axios from 'axios'

axios
  .get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => {
    console.info(`statusCode: ${res.statusCode}`)
    console.info(res)
  })
  .catch(error => {
    console.error(error)
  })
  
