
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';


export const GenerarPdf = () => {
    const styles = StyleSheet.create({
        tabla: {
            width: "auto",
            border: "1px solid black",
            borderBottomWidth: 0,
            marginTop: 20,
            borderRight: 0
        },
        tablaFila: {
            margin: "auto",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        tablaHeader: {
            margin: "5px",
            fontSize: "10px",
        },
        anchoColumna1: {
            width: "10%",
            border: "1px solid black",
            borderLeftWidth: 0,
            borderTop: 0,
        },
        anchoColumna2: {
            width: "20%",
            border: "1px solid black",
            borderLeft: 0,
            borderTop: 0,
        },
    })


    return (
        <Document>
            <Page size="A4">
                <View style={{ padding: "25px" }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Image src="/img/logoDesarrolloGlobal.png" style={{ width: "160px" }} />
                        </View>
                        <View>
                            <View style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 3, alignItems: "center" }}>
                                    <Image src="/img/Location.png" style={{ width: "12px" }} />
                                    <Text style={{ fontSize: "10px" }}>LINCE - LIMA - LIMA</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 3, alignItems: "center" }}>
                                    <Image src="/img/phone.png" style={{ width: "12px" }} />
                                    <Text style={{ fontSize: "10px" }}>(+51) 5556005 </Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 3, alignItems: "center" }}>
                                    <Image src="/img/correo.png" style={{ width: "12px" }} />
                                    <Text style={{ fontSize: "10px" }}>info@desarrolloglobal.pe</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 3, alignItems: "center" }}>
                                    <Image src="/img/page.png" style={{ width: "12px" }} />
                                    <Text style={{ fontSize: "10px" }}>https://www.desarrolloglobal.pe</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ border: "1px solid black", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 3 }}>
                            <Text style={{ fontSize: "12px", fontWeight: "bold" }}>BOLETA DE VENTA </Text>
                            <Text style={{ fontSize: "12px", fontWeight: "bold" }}>ELECTRONICA</Text>
                            <Text style={{ fontSize: "12px" }}>R.U.C. 20544396791</Text>
                            <Text style={{ fontSize: "12px" }}>B001 - 000001</Text>
                        </View>

                    </View>
                    <View style={{ marginTop: "20px", width: "45%" }}>
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                            <View>
                                <Text style={{ fontSize: "10px" }}>Fecha Vencimiento</Text>
                                <Text style={{ fontSize: "10px" }}>Fecha Emision</Text>
                                <Text style={{ fontSize: "10px" }}>Señor(es)</Text>
                                <Text style={{ fontSize: "10px" }}>DNI</Text>
                                <Text style={{ fontSize: "10px" }}>Tipo de Moneda</Text>
                                <Text style={{ fontSize: "10px" }}>Observaciom</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: "10px" }}>:  </Text>
                                <Text style={{ fontSize: "10px" }}>: 02/03/2023</Text>
                                <Text style={{ fontSize: "10px" }}>: MARTIN RIOS TINEO</Text>
                                <Text style={{ fontSize: "10px" }}>: 71236547</Text>
                                <Text style={{ fontSize: "10px" }}>: SOLES</Text>
                                <Text style={{ fontSize: "10px" }}>: CUOTA 1 DE 2 Y CUOTA 2 DE 2</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.tabla}>
                        <View style={styles.tablaFila}>
                            <View style={styles.anchoColumna1}>
                                <Text style={styles.tablaHeader}>Cantidad</Text>
                            </View>
                            <View style={styles.anchoColumna1}>
                                <Text style={styles.tablaHeader}>Unidad Medida</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}>Descripción</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}>Valor Unitario(*)</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}>Descuento(*)</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}>Importe de Venta(*)</Text>
                            </View>
                        </View>


                        <View style={styles.tablaFila}>
                            <View style={styles.anchoColumna1}>
                                <Text style={styles.tablaHeader}>1.00</Text>
                            </View>
                            <View style={styles.anchoColumna1}>
                                <Text style={styles.tablaHeader}>UNIDAD</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}> CURSO DE ALTA ESPECIALIZACION SISTEMA INTEGRADO DE GESTION ADMINISTRATIVA - MODULO PATRIMONIO Y TESORERIA</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}>S/. 268.44</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}>S/. 0.00</Text>
                            </View>
                            <View style={styles.anchoColumna2}>
                                <Text style={styles.tablaHeader}>S/. 316.00</Text>
                            </View>
                        </View>

                        <View style={{ display: "flex", justifyContent: "flex-end", flexDirection: "row", borderBottom: "1px solid black", borderRight: "1px solid black" }}>
                            <View>
                                <Text style={styles.tablaHeader}>Otros Cargos : S/. 0.00</Text>
                                <Text style={styles.tablaHeader}>Otros Tributos : S/. 0.00</Text>
                                <Text style={styles.tablaHeader}>ICBPER : S/. 0.00</Text>
                                <Text style={styles.tablaHeader}>Importe Total : S/. 527.00</Text>
                            </View>
                        </View>

                    </View>
                    <Text style={{ marginTop: "20px", fontSize: "12px" }}>Resumen:</Text>
                    <View style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: "70%" }}>
                            <Text style={{ fontSize: "12px" }}>SON: QUINIENTOS CUARENTA Y SIETE Y 00/100 SOLES</Text>
                        </View>
                        <View style={{ width: "30%", display: "flex", flexDirection: "row" }}>

                            <View>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>Op. Gravada</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>Op. Exonerada</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>Op. Inafecta</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>ISC</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>IGV</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>ICBPER</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>Otros Cargos</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>Otros Tributos</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>Monto de Redondeo</Text>
                                <Text style={{ fontSize: "10px", textAlign: "right" }}>Importe Total</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: "10px" }}>: S/. 268.64</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 0.00</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 0.00</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 0.00</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 80.39</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 0.00</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 0.00</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 0.00</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 0.00</Text>
                                <Text style={{ fontSize: "10px" }}>: S/. 527.00</Text>
                            </View>

                        </View>
                    </View>


                </View>

            </Page>
        </Document>
    )
}