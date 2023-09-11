import { NextResponse } from 'next/server'

import tickets from '@shared/tickets.json'

// NOTE: Имитация запроса к backend для получения данных о билетах.
export async function GET() {
  return NextResponse.json(tickets)
}
