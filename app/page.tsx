import Image from "next/image";

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
      <h1>Ecommerce Store</h1>
      {product.map((product: IProduct) => {
        return (
          <div key={product.id}>
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
            />
            <h1>{product.name}</h1>
            <h4>${product.price}</h4>
            <h5>{product.colors[2]}</h5>
          </div>
        );
      })}
    </>
  );
}
