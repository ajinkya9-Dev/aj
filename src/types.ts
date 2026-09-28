export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'turmeric' | 'oils' | 'millets' | 'herbal' | 'snacks';
  categoryLabel: string;
  price: number;
  weight: string;
  origin: string;
  curcuminOrPurity?: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  harvestSeason: string;
  image: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  labTestedBatch: string;
}

export interface SourcingRegion {
  id: string;
  name: string;
  ingredient: string;
  productType: string;
  farmerGroup: string;
  elevation: string;
  soil: string;
  harvestMonth: string;
  description: string;
  curcuminOrKeyMetric: string;
  svgCoordinates: { x: number; y: number };
  accentColor: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
