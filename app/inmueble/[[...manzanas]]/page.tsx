"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@nextui-org/react';

interface ManzanaProps {
    params: {
        manzana: string[];
    };
    searchParams?: {
        manzana?: string;
    }
}

const getInmuebleData = async (manzanaId: any) => {

    try {

        const response = await fetch(`/api/inmueble/${manzanaId}`);
        const inmuebles = await response.json();
        if (!response.ok) {
            throw new Error(`Error fetching inmueble data: ${inmuebles.message}`);
        }
        return inmuebles;
    } catch (error) {
        console.error('Error fetching inmueble data:', error);
    }


}

export default function Manzana(props: ManzanaProps) {

    const searchParams = useSearchParams();
    const manzana = searchParams.get("manzana");

    const [inmuebleData, setInmuebleData] = useState<any[]>([]);

    useEffect(() => {
        if (!manzana) {
            setInmuebleData([]);
            return;
        }
        getInmuebleData(manzana).then(setInmuebleData);
    }, [manzana]);

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-3 md:py-5">
            <h1>Manzana: {manzana}</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-3xl">
                {inmuebleData?.map((inmueble: any) => (

                    <Card key={inmueble.id} isFooterBlurred className="bg-background/60 dark:bg-default-100/50 max-w-[400px] w-full" shadow="sm" onPress={() => console.log('Card pressed')}>
                        <CardHeader className='absolute z-10 top-1 flex-col'>
                            <div>
                                <p className='text-white text-small font-bold'>Manzana: {inmueble.manzana} Lote: {inmueble.lote}</p>
                                <p className='text-white text-tiny font-bold'>{inmueble.direccion ? inmueble.direccion : "N/A"}</p>
                                <p className='text-white font-bold text-medium'>{inmueble.nombreTitular}</p>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-100 -translate-y-7 object-cover"
                            src="/images/card_inmueble.jpg"
                            height={225}
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t border-zinc-100/50 z-10 justify-between">
                            <Button color="primary" className="text-white font-bold text-center w-full">
                                Registrar pago
                            </Button>
                        </CardFooter>

                    </Card>
                ))}
            </div>
        </section>
    )
}