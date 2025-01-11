'use client';
import Image from "next/image";
import Link from "next/link";
import { CRating } from '@coreui/react-pro'; // Import the CRating component

interface IProduct {
  id: number;
  name: string;
  description: string;
  sku: string;
  categories: string[];
  price: number;
  olderPrice: number | null;
  rating: number | null;
  ratingCount: number | null;
  colors: string[];
  sale: boolean;
  image: string;
}

export default async function Home() {
  const res = await fetch('https://figma-template-4-api.vercel.app/api/products');
  const product = await res.json();
  console.log(product);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-8">Ecommerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {product.map((product: IProduct) => {
          return (
            <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href={`/${product.id}`}>
                <div className="flex justify-center items-center p-4">
                  <Image className="rounded-t-lg" src={product.image} alt={product.name} width={200} height={200} />
                </div>
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <div className="flex justify-end gap-5">
                  <p>${product.price}.00</p>
                  <p className="line-through">${product.olderPrice}.00</p>
                </div>
                {/* Add Rating and Rating Count */}
                <div className="mt-4">
                  <p className="flex justify-between text-gray-800 font-semibold">
                    Rating:
                  </p>
                  <div className="flex items-center gap-2">
                    {/* CoreUI Rating Component */}
                    <CRating className="flex" value={product.rating || 0} readOnly />
                    <p className="text-gray-600 text-sm">
                      {product.ratingCount ? `${product.ratingCount} reviews` : "No reviews"}
                    </p>
                  </div>
                </div>
                <Link href={`/${product.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add To Cart
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
