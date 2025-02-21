'use client'
import { useState } from 'react'
import { motion } from "framer-motion";
import Button from '@/components/Button'
import { useSearchParams } from 'next/navigation'
import { poppins } from '../ui/fonts';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { Suspense } from 'react';

function ExampleContent() {
  const [agreed, setAgreed] = useState(false)
  const searchParams = useSearchParams()
  const message = searchParams.get('message')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: message || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      alert('Debes aceptar la política de privacidad.')
      return
    }

    if (!executeRecaptcha) {
      console.log('ReCaptcha not available');
      return;
    }

    const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
      },
      body: JSON.stringify({
        ...formData,
        gRecaptchaToken,
      }),
    });

    if (response.ok) {
      alert('Mensaje enviado con éxito.')
    } else {
      alert('Hubo un error al enviar el mensaje.')
    }
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      className={`${poppins.className} isolate bg-white px-6 py-24 sm:py-32 lg:px-8`}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c21d2c] to-[#EA717B] pb-4">
          Contacta con nosotros
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">¿Necesitas asesoramiento? Nuestro equipo está aquí para ayudarte</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Empresa
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Número de teléfono
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phoneNumber"
                type="text"
                placeholder="+34 123 45 67 89"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2 flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mr-2"
            />
            <label htmlFor="agree" className="text-sm/6 text-gray-600">
              Acepto la{' '}
              <a href="#" className="font-semibold text-[#c21d2c]">
                política de privacidad
              </a>
            </label>
          </div>
        </div>
        <div className="mt-10">
          <Button className="w-full">
            Hablemos
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
export default function Example() {
  return (
    <Suspense>     
        <ExampleContent />
    </Suspense>

  )
}