export type Good = {
  id?: string;
  title: string;
  link: string;
  price: number;
  count: number;
};

export type PersonalOrder = {
  id?: string;
  personName: string;
  goods: Good[];
  isDelivery: boolean;
};

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

export interface Store {
  id: string;
  orderInfo: OrderCommonInfo;
  personalOrders: PersonalOrder[];

  setOrderTitle(title: string): void;
  setCurrencyCode(code: string): void;
  setCurrencyRate(rate: number): void;
  setParcelCost(parcelCost: number): void;
  setDeliveryCost(deliveryCost: number): void;
  setGeneralCostInBYN(costInBYN: number): void;
  addPerson(personData: PersonalOrder): void;
  addGood(personId: string, good: Good): void;
  deletePerson(personId: string): void;
  deleteGood(personId: string, goodId: string): void;
}
