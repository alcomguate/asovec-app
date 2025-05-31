// filepath: app/api/inmueble/[manzanaId]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    context: { params: { manzanaId: string } }
) {
    const { params } = await context;
    const { manzanaId } = await params;
    const response = await fetch(
        `${process.env.ASOVEC_HOSTNAME}:${process.env.ASOVEC_PORT}/v1/inmueble/manzana/${manzanaId}`,
        {
            headers: {
                'x-api-key': process.env.ASOVEC_API_KEY || ''
            }
        }
    );
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}