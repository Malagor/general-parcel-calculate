import { makeAutoObservable } from 'mobx';
import { Good, OrderCommonInfo, PersonalOrder } from 'types';
import { nanoid } from 'nanoid';

class OrderStore {
  public id: string;

  public orderInfo: OrderCommonInfo;

  public personalOrders: PersonalOrder[];

  constructor() {
    makeAutoObservable(this);

    this.id = '';

    this.orderInfo = {
      date: new Date(),
      title: 'Посылка с Буквавуда',
      currency: {
        code: 'RUB',
        rate: 0,
      },
      parcelCost: 0,
      deliveryCost: 100,
      generalCostInBYN: 0,
    };

    this.personalOrders = [
      {
        id: '1',
        personName: 'Kate',
        isDelivery: true,
        goods: [
          {
            id: '1',
            title: 'Obliquepenholder INFERNO St',
            link: 'https://www.popelpen.com/shop/ObliquepenholderINFERNOSt',
            count: 1,
            price: 14750,
          },
          {
            id: '2',
            title: 'Монограмма на фланце',
            link: 'https://www.popelpen.com/shop/monogramma-na-flantse',
            count: 1,
            price: 1999,
          },
        ],
      },
      {
        id: '2',
        personName: 'Анастасия',
        isDelivery: true,
        goods: [
          {
            id: '1',
            title: 'Penna ASTRA Dorata Eifelturm-Feder',
            link:
              'https://www.popelpen.com/shop/PennaASTRADorataEifelturm-Feder',
            count: 3,
            price: 135,
          },
          {
            id: '2',
            title: 'Walnut Ink set 6',
            link: 'https://www.popelpen.com/shop/walnut-ink-set-6',
            count: 2,
            price: 630,
          },
        ],
      },
      {
        id: '3',
        personName: 'Кирилл',
        isDelivery: true,
        goods: [
          {
            id: '1',
            title: 'Walnut Ink set 6',
            link: 'https://www.popelpen.com/shop/walnut-ink-set-6',
            count: 5,
            price: 630,
          },
        ],
      },
    ];
  }

  setOrderTitle(title: string) {
    this.orderInfo.title = title;
  }

  setCurrencyCode(code: string): void {
    this.orderInfo.currency.code = code;
  }

  setCurrencyRate(rate: number): void {
    this.orderInfo.currency.rate = rate;
  }

  setParcelCost(parcelCost: number): void {
    this.orderInfo.parcelCost = parcelCost;
  }

  calculateParcelTotalCost(): void {
    const totalSum = this.personalOrders.reduce(
      (orderSum, order) =>
        orderSum +
        order.goods.reduce((sum, good) => sum + good.price * good.count, 0),
      0
    );
    this.setParcelCost(totalSum);
  }

  setDeliveryCost(deliveryCost: number): void {
    this.orderInfo.deliveryCost = deliveryCost;
  }

  setGeneralCostInBYN(costInBYN: number): void {
    this.orderInfo.generalCostInBYN = costInBYN;
  }

  addPerson(personData: PersonalOrder) {
    const data = { ...personData, id: nanoid() };
    this.personalOrders.push(data);
  }

  deletePerson(orderId: string) {
    this.personalOrders = this.personalOrders.filter((p) => p.id !== orderId);
  }

  toggleDelivery(orderId: string) {
    this.personalOrders = this.personalOrders.map((order) =>
      order.id === orderId ? { ...order, isDelivery: !order.isDelivery } : order
    );
  }

  addGood(orderId: string, good: Good) {
    const goodData = { ...good, id: nanoid() };
    const index = this.personalOrders.findIndex((p) => p.id === orderId);
    this.personalOrders[index].goods.push(goodData);
  }

  deleteGood(orderId: string, goodId: string) {
    const personIndex = this.personalOrders.findIndex((p) => p.id === orderId);
    const { goods } = this.personalOrders[personIndex];
    this.personalOrders[personIndex].goods = goods.filter(
      (g) => g.id !== goodId
    );
  }
}

export default new OrderStore();
