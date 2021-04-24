import React, { FC } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useAppStore } from 'store/appContext';
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

export const OrderInfo: FC = () => {
  const { orderInfo } = useAppStore();

  return useObserver(() => (
    <OrderWrapper>
      <OrderTitle />
      <OrderDate data={orderInfo.date} />
      <Currency />
      <ParcelCost />
      <DeliveryCost />
      <BYNCost />
      <PersonList />
    </OrderWrapper>
  ));
};
