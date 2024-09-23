import nodemiler from 'nodemailer'

const eviarMail = async (correo) => {
    const config = {
        host: "smtp.gmail.com",
        port:587,
        auth: {
            user: 'siigoverificaciones@gmail.com',
            pass: 'unkf tcks jhcg juch'
        }
    }
    const mensaje = {
        from: 'siigoverificaciones@gmail.com',
        to: correo,
        subject: 'Codigo de verficacion',
        text:'Tu codigo de verificacion 123451231'
    }
    const transport = nodemiler.createTransport(config)

    const info = await transport.sendMail(mensaje)
    console.log(info)
}

eviarMail('ballesterosdeveloper56@gmail.com')