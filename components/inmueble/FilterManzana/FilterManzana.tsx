import { Link } from '@nextui-org/link';

const fetchManzanas = async () => {
    try {
        const response = await fetch(`${process.env.ASOVEC_HOSTNAME}:${process.env.ASOVEC_PORT}/v1/inmueble/manzana`, {
            headers: new Headers({
                'x-api-key': process.env.ASOVEC_API_KEY || ''
            })
        });
        const manzanas = await response.json();
        if (!response.ok) {
            throw new Error(`Error fetching manzanas: ${manzanas}`);
        }
        return manzanas;

    } catch (error) {
        console.error('Error fetching manzanas:', error);

    }
}

export const FilterManzana = async () => {

    const manzanas = await fetchManzanas();

    return (
        <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
            <div className='flex gap-4'>
                {manzanas?.map((manzana: any) => (
                    <Link
                        key={manzana}
                        className='w-full max-w-xs'
                        
                        color='primary'
                        href={`?manzana=${manzana}`}
                    >
                        {manzana}
                    </Link>
                ))}
            </div>
        </section>
    )
}