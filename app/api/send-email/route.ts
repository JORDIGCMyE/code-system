import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {

  const { firstName, lastName, company, email, phoneNumber, message, gRecaptchaToken } = await request.json();

  const secretKeyRecaptcha = process.env.RECAPTCHA_SECRET_KEY;

  let res;

  const formData = `secret=${secretKeyRecaptcha}&response=${gRecaptchaToken}`;

  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false })
  }

  if (res && res.data?.success && res.data?.score > 0.5) {
    console.log("res.data?.score: ", res.data?.score);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'codesystem241@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `
        Nombre: ${firstName} ${lastName}
        Empresa: ${company}
        Correo electrónico: ${email}
        Teléfono: ${phoneNumber}
        Mensaje: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return new Response('Correo enviado con éxito', { status: 200 });
    } catch (error) {
      console.log(error);
      return new Response('Error al enviar el correo', { status: 500 });
    }
  }
  else {
    return NextResponse.json({ success: false });
  }


}
