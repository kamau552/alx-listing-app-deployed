
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
  bed: string;
  shower: string;
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
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: number;
  description: string;
}



export interface PropertyCardProps {
  data: PropertyProps;
  index: number;
}


export interface PropertyGridProps {
  data: PropertyProps &  {
    offers: {
      bed: number;
      shower: number;
      occupants: number;
    };

  };
}

export interface PropertySmallScreenProps {
  property: PropertyProps;
}

export interface SearchProps {
  mobile?: boolean;  // Add this line
  // ... other props you already have
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