import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, type NextRequest } from 'next/server'
export const dynamic = 'force-static'
 
type ResponseData = {
  message: string
}

let handling = 0;
 
export async function GET() {
 
  return Response.json({
    "handling": handling++
  }
  , {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}