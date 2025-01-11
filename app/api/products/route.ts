import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'A great product!',
    image: 'products/product-1.png',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 150,
    description: 'Another amazing product!',
    image: 'products/product-2.png',
  },
];

// Handle GET requests
export async function GET() {
  return NextResponse.json(products); // Return JSON response
}
