"use client"
import { LoadingComponent } from '@/components/dataTable/LoadingComponent';
import { useLoading } from '@/hooks/useLoading';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DataPagos } from '../../../../../helpers/DataPagos';
import { DataCuotas } from '../../interface/InterfacePago';
import { BtnVoucher } from './BtnVoucher';
import { EditPagos } from './EditPagos';
import { GenerarPdf } from './GenerarPdf';
export const TablePagosId = ({ id }: any) => {
    const buscarData = DataPagos.find((valor) => valor.id == id)
    const columns: TableColumn<DataCuotas>[] = [
        {
            name: 'COD',
            sortable: true,
            center: true,
            cell: row => row.id
        },
        {
            name: 'FECHA DE VENC',
            sortable: true,
            cell: row => row.fechaVencimiento,
            center: true,
        },
        {
            name: 'NUMERO DE COMPROBANTE',
            sortable: true,
            cell: row =><p>{row.numeroComprobante !== "" ? (row.numeroComprobante) : "--"}</p>,
            center: true,
        },
        {
            name: 'MEDIO',
            sortable: true,
            selector: row => row.medio,
            center: true,
        },
        {
            name: 'MONTO',
            sortable: true,
            cell: row => <p>S/. {row.monto}</p>,
            center: true,
        },
        {
            name: 'VOUCHER DE PAGO',
            sortable: true,
            center: true,
            cell: row => <BtnVoucher />
        },
        {
            name: 'FACTURA/BOLETA',
            sortable: true,
            center: true,
            cell: row => <PDFDownloadLink document={<GenerarPdf />} fileName="boleta-01"><button><img src="/img/gif/factura.gif" alt="" width={40} /></button></PDFDownloadLink>
        },
        {
            name: 'ESTADO PAGO',
            sortable: true,
            selector: row => row.estado,
            center: true,
            style: {
                padding: "1px",
                margin: "10px",
                borderRadius: "15px",
                fontWeight: "600"
            },
            conditionalCellStyles: [
                {
                    when: row => row.estado === "Realizado",
                    style: {
                        border: "1px solid #1C71F0",
                        color: "#1C71F0",
                    }
                },
                {
                    when: row => row.estado === "Pendiente",
                    style: {
                        border: "1px solid #FDAB3D",
                        color: "#FDAB3D",
                    }
                }
            ]
        },
        {
            name: 'MENSAJE',
            sortable: true,
            center: true,
            cell: row => <img src="/img/gif/whatsapp.svg" alt="" width={35} />
        },
        {
            name: 'EDITAR',
            sortable: true,
            center: true,
            cell: row => <EditPagos data={row} dataCompleta={buscarData} />
        },
    ];
    const [pending] = useLoading(buscarData)
    return (
        <>
            <DataTable
                columns={columns}
                data={buscarData?.cuotas!}
                highlightOnHover
                progressPending={pending}
                progressComponent={<LoadingComponent />}
            />
        </>
    )
}