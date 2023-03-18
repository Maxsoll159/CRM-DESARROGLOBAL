import dynamic from "next/dynamic"

const TablePagos = dynamic(() => import("./components/TablePagos"), { ssr: false })

export default function Pagos() {
    return (
        <>
            <h1 className='Montserrat font-black text-2xl mb-5'>Listado de Pagos</h1>
            <TablePagos/>
        </>
    )
}