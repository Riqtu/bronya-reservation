import Router from 'koa-router'
const router = new Router()

router.get('/files', renderForm)
router.post('/upload', handleForm)

async function renderForm(ctx) {
  await ctx.render('file_upload')
}

async function handleForm(ctx) {
  console.log('Files: ', ctx.request.files.image.path)
  console.log('Fields: ', ctx.request.fields)
  const fileName = ctx.request.files.image.path.split('/')
  ctx.body = {
    path: fileName[2]
  }
}

export default router.routes()
