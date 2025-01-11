import { NextResponse } from 'next/server';
import { product } from './data';

export const GET = () => {
  return NextResponse.json(product); // Return JSON response
}