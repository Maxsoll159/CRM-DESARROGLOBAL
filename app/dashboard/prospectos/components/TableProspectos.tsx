"use client"

import DataTable, { TableColumn } from "react-data-table-component";
import { useRouter } from 'next/navigation';
import { DatosProspectos } from "@/helpers/DatosProps";
import { DataPros } from "../interface/InterfaceProps";
import { useFiltrosTable } from "@/hooks/useFiltroTable";
import { BotonesFiltros } from "./BotonesFiltro";
import Image from "next/image";
export default function TableProspectos() {
    const router = useRouter();
    const columns: TableColumn<DataPros>[] = [

        {
            name: 'Nombre de Programa',
            sortable: true,
            cell: row => <div className="flex items-center gap-6 p-2 w-full"><img src={row.logo} alt="" className="w-10" /><p className="text-gray-400 font-medium text-[15px]">{row.nombre}</p></div>,
            width: "35rem"
        },
        {
            name: 'Categoria',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.categoria}</p>
        },
        {
            name: 'Modalidad',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.modalidad}</p>
        },
        {
            name: 'Prospectos',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.prospectos}</p>
        },
        {
            name: 'Fecha',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.fecha}</p>
        },
        {
            name: 'Acciones',
            cell: row => <button onClick={() => router.push(`/dashboard/prospectos/${row.id}`)}><Image src='/img/Gif/view.gif' alt='Logo' width={45} height={45} /> </button>

        }
    ];

    const [setFilterText, setFilterSelect, setFiltroFechas, filteredAccounts] = useFiltrosTable(DatosProspectos)
    return (
        <>
            <BotonesFiltros setFilterText={setFilterText} setFilterSelect={setFilterSelect} setFiltroFechas={setFiltroFechas} />
            <DataTable
                columns={columns}
                data={filteredAccounts}
                pagination
                highlightOnHover
            />
        </>
    )
}