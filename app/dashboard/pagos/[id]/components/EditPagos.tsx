"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
export const EditPagos = ({ data, dataCompleta }: any) => {
    console.log(dataCompleta)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [tipoOpcion, setTipoOpcion] = useState<boolean>(true)
    return (
        <>

            <button
                type="button"
                onClick={() => setIsOpen(true)}
            >
                <img src="/img/gif/edit.gif" alt="" width={35} />
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full lg:w-[40%] xl:w-[40%] transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='bg-[#97B1F7] flex'>
                                        <button className='p-2 text-white flex items-center justify-center gap-3 w-1/4 bg-[#4272EF]' onClick={() => setTipoOpcion(true)}><i className="fi fi-sr-time-forward flex items-center"></i>Actualizar Pago</button>
                                        <button className='p-2 text-white flex items-center justify-center gap-3 w-1/4 bg-[#97B1F7]' onClick={() => setTipoOpcion(false)}><i className="fi fi-rr-list flex items-center"></i>Detalle Programa</button>
                                    </div>
                                    <div className='p-9'>
                                        {tipoOpcion ? (
                                            <form action="">
                                                <div className='flex justify-between flex-wrap items-center gap-2'>
                                                    <div className='w-[118px] mb-3'>
                                                        <label htmlFor="MONTO CUOTA" className='block mb-1 Montserrat text-sm'>MONTO CUOTA</label>
                                                        <input type="text" className='w-full outline-none border border-gray-400 rounded-md p-2 bg-gray-200' value={`S/ ${data.monto}`} disabled />
                                                    </div>
                                                    <div className='w-[118px] mb-3'>
                                                        <label htmlFor="MONTO CUOTA" className='block mb-1 Montserrat text-sm'>MEDIO DE PAGO</label>
                                                        <select name="" id="" className='w-full outline-none border border-gray-400 rounded-md p-2 font-medium'>
                                                            <option value="">Elegir:</option>
                                                            <option value="">YAPE</option>
                                                            <option value="">PLIN</option>
                                                            <option value="">BCP</option>
                                                        </select>
                                                    </div>
                                                    <div className='w-1/4 mb-3'>
                                                        <label htmlFor="MONTO CUOTA" className='block mb-1 Montserrat text-sm'>ASESOR</label>
                                                        <select name="" id="" className='w-full outline-none border border-gray-400 rounded-md  p-2  font-medium'>
                                                            <option value="">Elegir:</option>
                                                            <option value="">SHEYLA ROJAS</option>
                                                            <option value="">PILAR RIBER</option>
                                                            <option value="">DAVID MARTINEZ</option>
                                                        </select>
                                                    </div>
                                                    <div className='w-[236px] mb-3'>
                                                        <label htmlFor="MONTO CUOTA" className='block mb-1 Montserrat text-sm'>MARKETERO</label>
                                                        <select name="" id="" className='w-full outline-none border border-gray-400 rounded-md  p-2  font-medium'>
                                                            <option value="">Elegir:</option>
                                                            <option value="">PEDRO LOS PALOTES</option>
                                                            <option value="">PILAR RIBER</option>
                                                            <option value="">DAVID MARTINEZ</option>
                                                        </select>
                                                    </div>
                                                    <div className='w-[170px]'>
                                                        <label htmlFor="MONTO CUOTA" className='block mb-1 Montserrat text-sm w-full'>FECHA VENCIMIENTO</label>
                                                        <input type="text" className='w-full outline-none border border-gray-400 rounded-md px-5 py-2 bg-gray-200' value={`S/ ${data.fechaVencimiento}`} disabled />
                                                    </div>
                                                    <div className='w-[170px]'>
                                                        <label htmlFor="MONTO CUOTA" className='block mb-1 Montserrat text-sm w-full'>NUM. OPERACIÓN</label>
                                                        <input type="text" className='w-full outline-none border border-gray-400 rounded-md px-5 py-2 font-medium' />
                                                    </div>
                                                    <div className='w-[170px]'>
                                                        <label htmlFor="MONTO CUOTA" className='block mb-1 Montserrat text-sm w-full'>FOTO DEL VOUCHER</label>
                                                        <label className=" border border-gray-300 p-2 rounded flex items-center gap-2 justify-center">
                                                            <input type="file" className='d-none' />
                                                            Subir Imagen<img src='/img/gif/foto.gif' width={25} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <button className='bg-blue-600 text-white mt-5 px-10 py-3 rounded-md'>Guardar</button>
                                            </form>
                                        ) : (
                                            <div>
                                                <h1 className='Montserrat text-lg'>Lista de Programas Incluidos</h1>
                                                <div className='w-full mt-5'>
                                                    <div className='flex justify-between items-center'>
                                                        <p className='Montserrat'>Programa</p>
                                                        <p className='Montserrat'>Horas</p>
                                                        <p className='Montserrat'>Fecha de Inicio</p>
                                                        <p className='Montserrat'>Fecha de Fin</p>
                                                    </div>
                                                    <div className='flex justify-between items-center'>
                                                        <p className='Montserrat'>{dataCompleta.programa}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}