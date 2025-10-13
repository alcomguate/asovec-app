"use client"

import { useSearchParams } from "next/navigation";
import { PagoMantenimientoModal } from "@/components/inmueble/PagoMantenimientoModal";

interface PagoProps {
    params: {
        manzana: string[];
        lote: string[];
    };
    searchParams?: {
        manzana?: string;
        lote?: string;
    }
}

export default function Pago(props: PagoProps) {
    const searchParams = useSearchParams();
    const manzana = searchParams.get("manzana");
    const lote = searchParams.get("lote");

    

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-3 md:py-5">
            <h1>Manzana: {manzana} Lote: {lote}</h1>
            <PagoMantenimientoModal manzana={manzana ?? undefined} lote={lote ?? undefined}/>
        </section>
    );
}