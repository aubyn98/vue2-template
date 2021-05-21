import { request } from '../utils/http'
let apis = require.context('./', true, /\.js$/)
apis = apis.keys().reduce((total, apiPath) => {
  const apiName = apiPath.match(/.*\/(.*)\.js$/)[1]
  if (apiName !== 'index') {
    return { ...total, ...apis(apiPath).default(request) }
  }
  return total
}, {})
export default {
  install(app) {
    app.prototype.$api = apis
    app.prototype.$request = request
  },
  ...apis,
}
