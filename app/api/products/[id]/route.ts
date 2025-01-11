import { product } from '../route';
import { NextResponse } from 'next/server';

export async function GET( params : { params: { id: string } }) {
    const productId = parseInt(params.params.id);
  
    const filterProduct = product.find((p) => p.id === productId);
  
    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
  
    return NextResponse.json(filterProduct);
  }
