import { Good, OrderCommonInfo, PersonalOrder, Store } from 'types';
import { nanoid } from 'nanoid';

const orderInfo: OrderCommonInfo = {
  date: new Date(),
  title: 'Посылка с Буквавуда',
  currency: {
    name: '',
    rate: 0,
  },
  parcelCost: 0,
  deliveryCost: 0,
  generalCostInBYN: 0,
};

export function createAppStore(): Store {
  return {
    id: '',
    orderInfo,
    personalOrders: [],

    setOrderTitle(title: string) {
      this.orderInfo.title = title;
    },

    setCurrency(currency: { name?: string; rate?: number }): void {
      const { name, rate } = currency;
      this.orderInfo.currency = {
        rate: rate || this.orderInfo.currency.rate,
        name: name || this.orderInfo.currency.name,
      };
    },
    setParcelCost(parcelCost: number): void {
      this.orderInfo.parcelCost = parcelCost;
    },
    setDeliveryCost(deliveryCost: number): void {
      this.orderInfo.deliveryCost = deliveryCost;
    },
    setGeneralCostInBYN(costInBYN: number): void {
      this.orderInfo.generalCostInBYN = costInBYN;
    },
    addPerson(personData: PersonalOrder) {
      const data = { ...personData, id: nanoid() };
      this.personalOrders.push(data);
    },
    deletePerson(personId: string) {
      this.personalOrders = this.personalOrders.filter(
        (p) => p.id !== personId
      );
    },
    addGood(personId: string, good: Good) {
      const goodData = { ...good, id: nanoid() };
      const index = this.personalOrders.findIndex((p) => p.id === personId);
      this.personalOrders[index].goods.push(goodData);
    },
    deleteGood(personId: string, goodId: string) {
      // const personIndex = this.personalOrders.findIndex(
      //   (p) => p.id === personId
      // );
      // const goodIndex = this.personalOrders
      //   .filter((p) => p.id === personId)
      //   .findIndex((g) => g.id === goodId);
      // this.personalOrders[personId]
    },
  };
}
