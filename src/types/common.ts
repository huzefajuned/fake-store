export interface endUrlsInterface {
  products: string;
}

export interface ratingInterface {
  rate: number;
  count: number;
}
export interface productInterafce {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ratingInterface;
  title: string;
}
