type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  thumbnail: string;
  availabilityStatus: 'In Stock' | 'Low Stock' | 'No Stock';
  rating: number;
};
