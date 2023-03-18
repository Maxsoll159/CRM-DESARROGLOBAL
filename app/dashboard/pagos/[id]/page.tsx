"use client"

import { TablePagosId } from "./components/TablePagosId"

export default function PagoId({ params }: any) {
    const { id } = params
    return (
        <>
            <h1 className='Montserrat font-black text-2xl mb-5'>Detalle de Registro de pago de {id}</h1>
            <TablePagosId id={id} />
            <div className="flex">
                <div>
                    <p className="mt-7 text-red-500">Si quiere generar una boleta o factura de todo el curso, o diplomado    dar click en el boton ***</p>
                    <button className="p-2 border rounded-lg text-red-600 mt-5 border-red-600 font-semibold">Generar Boleta/Factura</button>
                </div>
            </div>
        </>
    )
}