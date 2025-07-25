export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}
export interface PillProps {
  title: string;
  styles?: string;
}
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: number;
  shower: number;
  occupants: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers:  Offers;
  image: string;
  discount: number;
  description: string;
}



export interface PropertyCardProps {
  data: PropertyProps;
  property: PropertyProps;
}


export interface PropertyGridProps {
  data: PropertyProps &  {
    offers: {
      bed: number;
      shower: number;
      occupants: string;
    };

  };
}

export interface PropertySmallScreenProps {
  property: PropertyProps;
}

export interface SearchProps {
  mobile?: boolean; 
}
export interface Review {
  id: string;
  name: string;
  avatar: string;
  work?: string;
  date: string;
  place?: string;
  comment: string;
  rating: number;
}

export interface ReviewSectionProps {
  reviews: Review[];
  rating: number;
}

export interface OrderSummaryProps {
  bookingDetails: {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
  };
  hideImageOnDesktop?: boolean; 
}