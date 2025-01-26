export interface endUrlsInterface {
  products: string;
}

// single product
export interface productInterafce {
  [x: string]: any;
  length: number;
  category: {
    creationAt: string;
    id: number;
    image: string;
    name: string;
    updatedAt: string;
  };
  creationAt: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: string;
}
