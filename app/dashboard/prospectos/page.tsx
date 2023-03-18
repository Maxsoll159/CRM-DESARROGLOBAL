import dynamic from 'next/dynamic';
const TableProspectos = dynamic(() => import("./components/TableProspectos"), { ssr: false })
export default function Dashboard() {
    return(
        <>
            <h1 className='Montserrat font-black text-2xl'>Listado de Prospectos</h1>
           <TableProspectos />
        </>
    )
}