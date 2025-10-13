import { PagoMantenimiento } from "@/components/inmueble/PagoMantenimiento";

export default function IngresoPago() {

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <h1 className="text-2xl font-bold">Ingreso de pago</h1>
            <PagoMantenimiento />
        </section>
    );
}