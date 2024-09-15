import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, type NextRequest } from 'next/server'
export const dynamic = 'force-static'

let handling = 0;
 
export async function GET() {
 
  return Response.json({
    "handling": handling++
  }
  , {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}