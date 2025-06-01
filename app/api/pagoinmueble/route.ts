import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        /*// Convert FormData to JSON
        const body: any = {};
        formData.forEach((value, key) => {
            body[key] = value;
        });*/

        const response = await fetch(
            `${process.env.ASOVEC_HOSTNAME}:${process.env.ASOVEC_PORT}/v1/pago`,
            {
                method: 'POST',
                headers: {
                    'x-api-key': process.env.ASOVEC_API_KEY || '',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    recibo: body.recibo,
                    nombre: body.nombre,
                    anioPago: body.anioPagado,
                    mesPago: body.mesPagado,
                    numeroDeposito: body.numeroDeposito,
                    pagoEnEfectivo: false,
                    descripcion: body.descripcion,
                    fechaPagoMap: {
                        dia: body.dia,
                        mes: body.mes,
                        anio: body.anio
                    },
                    monto: parseFloat(body.monto),
                    inmueble: {
                        lote: body.inmueble.lote,
                        manzana: body.inmueble.manzana,
                    }
                })
            }
        );
        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error("API Error:", error); // <--- Add this line
        return NextResponse.json(
            { error: 'Error processing payment', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}