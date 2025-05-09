// app/api/feedback/route.ts
import { createFeedback } from '@/lib/actions/general.action';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();

    const result = await createFeedback(body);

    return Response.json(result);
}
