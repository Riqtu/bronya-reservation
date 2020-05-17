export default () => async (ctx, next) => {
  if (!ctx.user && ctx.user.role === 'superAdmin') {
    ctx.throw(403, { message: 'Forbidden' })
  }
  await next()
}
