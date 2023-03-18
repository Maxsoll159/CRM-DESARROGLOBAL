
'use client';
import { Inter } from '@next/font/google'
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const formLogin = (e: FormEvent) =>{
    e.preventDefault()
  }
  return (

    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <section className="bg-bg-login bg-cover bg-center h-full">
        <div className="container mx-auto flex items-center align-center w-screen h-screen">
          <div className="w-11/12 mx-auto drop-shadow-2x lg:w-1/4 xl:w-1/4 md:w-1/2 ">
            <div className=" bg-blue-700 mx-auto p-5">
              <img src="https://nuevapagina.s3.amazonaws.com/DG-Logotipo_Blanco.png" alt="" className="w-52 mx-auto" />
            </div>
            <div className="py-10 px-5 bg-white">
              <h2 className="text-center font-medium text-xl text-gray-700">Sign In</h2>
              <p className="text-center text-gray-500 w-full mx-auto mt-4">Ingrese su dirección de correo electrónico y contraseña para acceder al panel de administración.</p>
              <form action="" className="mt-5" onSubmit={(e)=>formLogin(e)}>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
                <label className="block mt-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <input type="password" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="*************" />
                </label>
                <button className="bg-blue-600 p-3 text-white font-bold mx-auto rounded-xl mt-5 w-full" onClick={() => router.push('/dashboard/')}>Login In</button>
                <div className="w-full flex items-center justify-center mt-4">
                  <a className="font-light text-blue-600">¿Olvidate tu contraseña?</a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
