let utils = require.context('./', true, /\.js$/)
utils = utils.keys().reduce((total, utilPath) => {
  const utilName = utilPath.match(/.*\/(.*)\.js$/)[1]
  if (utilPath !== './index.js') {
    return { ...total, [utilName]: utils(utilPath).default }
  }
  return total
}, {})
export * from './http'
export default {
  install(app) {
    app.prototype.$utils = utils
    // console.log(app.prototype)
  },
  ...utils,
}
