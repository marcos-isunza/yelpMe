export interface Business {
  rating: number;
  price: string;
  phone: string;
  id: string;
  is_closed: boolean;
  categories?: any[];
  review_count: number;
  name: string;
  url: string;
  coordinates?: any[];
  image_url: string;
  location: any[];
  distance: number;
  transactions: any[];
}
