import { Router } from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const router = Router()

const options = {
  target: 'https://jsonplaceholder.typicode.com/users', // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: {
    ['^/api/users/all']: '',
  }, // rewrites our endpoints to '' when forwarded to our target
}

router.get('/users/all', createProxyMiddleware(options))

export { router }
