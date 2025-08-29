import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
  type: string;
  image: string;
  href: string;
};

type ProductsForPetsProps = {
  products: Product[];
  viewAllHref?: string;
  onAddToCart?: (p: Product) => void;
};

export default function ProductsForPets({
  products,
  viewAllHref,
  onAddToCart,
}: ProductsForPetsProps) {
  return (
    <section className='py-16 sm:py-20 lg:py-24 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <header className='max-w-2xl mb-8'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900'>
            Products for Pets
          </h2>
          <p className='mt-3 text-gray-600'>
            Shop our best products for your pets.
          </p>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className='mt-4 inline-block rounded-full bg-emerald-500 px-6 py-2 text-white font-semibold shadow hover:bg-emerald-600 transition'
            >
              View All
            </a>
          )}
        </header>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='rounded-xl bg-white ring-1 ring-black/5 shadow p-6 flex flex-col items-center'
            >
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className='object-cover rounded-lg mb-4'
              />
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {product.name}
              </h3>
              <div className='text-md font-bold text-gray-700 mb-2'>
                {product.price} {product.currency}
              </div>
              <a
                href={product.href}
                className='mb-2 text-emerald-600 hover:underline'
              >
                View Product
              </a>
              {onAddToCart && (
                <button
                  onClick={() => onAddToCart(product)}
                  className='mt-2 rounded-full bg-gray-900 px-4 py-1 text-xs font-semibold text-white shadow hover:bg-gray-800 transition'
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
