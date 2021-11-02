import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

VueRouter.prototype.linkTo = function (to, { current, append, type } = {}) {
  if (typeof arguments[0] != 'object') return
  type = type || '_blank'
  console.log(this)
  const routeData = this.resolve.apply(
    this,
    [to, current, append].filter(i => typeof i !== 'undefined')
  )
  window.open(routeData.href, type)
}

export default router
