export type Good = {
  id: string;
  title: string;
  link: string;
  price: number;
  count: number;
};

export interface PersonalOrder {
  id: string;
  personName: string;
  goods: Good[];
  isDelivery: boolean;
  personalDeliveryCost: number;
}

export type OrderCommonInfo = {
  title: string;
  date: Date;
  currency: {
    code: string;
    rate: number;
  };
  parcelCost: number;
  deliveryCost: number;
  generalCostInBYN: number;
};
