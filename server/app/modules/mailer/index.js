import Router from 'koa-router'

import nodemailer from 'nodemailer'

const router = new Router({ prefix: '/mail' })

const transport = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  auth: {
    user: 'xxx-zet@mail.ru',
    pass: 'zerogravity1',
  },
})
async function sendEmail(ctx) {
  const {
    params: { email: email },
  } = ctx
  const message = {
    from: 'xxx-zet@mail.ru', // Sender address
    to: email, // List of recipients
    subject: 'Ура! Ты с Броней!', // Subject line
    text: 'Успешная регистрация в сервисе Броня!', // Plain text body
  }
  await transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      ctx.body = { data: info }
      console.log(info)
    }
  })
}

router.get('/:email', sendEmail)

export default router.routes()
