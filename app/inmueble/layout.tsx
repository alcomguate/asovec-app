import { FilterManzana } from "@/components/inmueble/FilterManzana";



export default async function Layout({ children}: { children: React.ReactNode}) {
    

    return (


        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <h1 className="text-2xl font-bold">Inmuebles</h1>
            <FilterManzana />
            {children}
            
        </section>
    );
}