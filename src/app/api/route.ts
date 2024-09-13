import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET() {
  return NextResponse.json({
      hello: process.env.AES,
  });
}