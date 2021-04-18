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
} from './components';

type OrderInfoProps = {};

export const OrderInfo: FC<OrderInfoProps> = () => {
  const { orderInfo } = useAppStore();

  return useObserver(() => (
    <OrderWrapper>
      <OrderTitle />
      <OrderDate data={orderInfo.date} />
      <Currency />
      <ParcelCost />
      <DeliveryCost />
      <BYNCost />
    </OrderWrapper>
  ));
};
