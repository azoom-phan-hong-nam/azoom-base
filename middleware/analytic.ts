export default defineNuxtRouteMiddleware((to, from) => {
  console.log('User navigated to: ', to.path)
})
