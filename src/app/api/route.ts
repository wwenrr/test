import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export function GET() {
  return NextResponse.json({
      hello: "hello",
  });
}