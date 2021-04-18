import React from 'react';
import { OrderInfo } from 'components/OrderInfo/OrderInfo';
import { useObserver } from 'mobx-react-lite';

export function App() {
  return useObserver(() => <OrderInfo />);
}
