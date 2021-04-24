import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import store from 'store/OrderStore';
import { OrderWrapper } from './styled';
import {
  OrderTitle,
  OrderDate,
  ParcelCost,
  DeliveryCost,
  Currency,
  BYNCost,
  PersonList,
} from './components';

export const OrderInfo: FC = observer(() => {
  store.calculateParcelTotalCost();
  return (
    <OrderWrapper>
      <OrderTitle />
      <OrderDate data={store.orderInfo.date} />
      <Currency />
      <ParcelCost
        currency={store.orderInfo.currency.code}
        // cost={countTotalParcelCost(store.personalOrders)}
        cost={store.orderInfo.parcelCost}
      />
      <DeliveryCost />
      <BYNCost />
      <PersonList />
    </OrderWrapper>
  );
});
