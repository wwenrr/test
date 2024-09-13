import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, type NextRequest } from 'next/server'
export const dynamic = 'force-static'
 
type ResponseData = {
  message: string
}
 
export async function GET() {
 
  return Response.json({
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "isActive": true
    },
    "posts": [
      {
        "id": 1,
        "title": "My first post",
        "content": "This is the content of the first post.",
        "date": "2024-09-01T10:00:00Z"
      },
      {
        "id": 2,
        "title": "Another post",
        "content": "This is the content of another post.",
        "date": "2024-09-02T11:00:00Z"
      }
    ],
    "comments": [
      {
        "id": 1,
        "postId": 1,
        "author": "Alice",
        "text": "Great post!",
        "date": "2024-09-01T12:00:00Z"
      },
      {
        "id": 2,
        "postId": 2,
        "author": "Bob",
        "text": "Very informative.",
        "date": "2024-09-02T13:00:00Z"
      }
    ]
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