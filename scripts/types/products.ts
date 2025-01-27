export interface Product {
  _id: string;
  name: string;
  _type: "product";
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  price: string;
  oldPrice?: string;
  description: string;
  discountPercentage?: number;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category?: string;
  slug: {
    _type : "slug";
    current: string; 
  };
}


