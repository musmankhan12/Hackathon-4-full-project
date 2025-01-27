import { client } from "@/sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { Product } from "../../../../scripts/types/products";
import Image from "next/image";

// Define the ProdimageProps interface
interface ProdimageProps {
  params: {
    slug: string;
  };
}

const productBySlug = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    price,
    description, // Add the description field
    image,
    "slug" : slug.current
  }
`;

async function getProduct(slug: string): Promise<Product | null> {
  try {
    console.log('Fetching product for slug:', slug);
    const product = await client.fetch(productBySlug, { slug });
    console.log('Fetched product:', product); // Log the fetched product for debugging
    return product;
  } catch (error) {
    console.error('Error fetching product:', error); // Log any errors
    return null;
  }
}

// Main component
export default async function Prodimage({ params }: ProdimageProps) {
  const { slug } = params;

  // Log slug to check if it is passed correctly
  console.log("Slug from params:", slug);

  // Fetch product details
  const product = await getProduct(slug);

  // Handle case when product is not found
  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  console.log('Product found:', product);

  // Render the product details
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()} // Ensure urlFor works
              alt={product.name || "Product Image"} // Handle missing product name
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        {/* Details Section */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">
            {product.name || "No Product Name"} {/* Fallback for missing product name */}
          </h1>
          <p className="text-2xl font-sans">
            {product.price ? `$${product.price}` : "Price not available"}
          </p>
          {/* Description Section */}
          <p className="text-lg text-gray-600 leading-relaxed">
            {product.description || "No detailed description available for this product."}
          </p>
        </div>
      </div>
    </div>
  );
}
