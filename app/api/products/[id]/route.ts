// import { product } from '../route';
import { product } from '../data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest,{ params } : { params: { id: string } }) {
    const productId = parseInt(params.id);
  
    const filterProduct = product.find((p) => p.id === productId);
  
    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
  
    return NextResponse.json(filterProduct);
  }
