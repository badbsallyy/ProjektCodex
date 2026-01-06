export type DealCategory = "Elektronik" | "Mode" | "Haushalt" | "Sport" | "Gaming";

export interface Deal {
  id: string;
  slug: string;
  title: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  imageUrl: string;
  category: DealCategory;
  shopName: string;
  affiliateLink: string;
  expiryDate: string;
  isFeatured: boolean;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}
