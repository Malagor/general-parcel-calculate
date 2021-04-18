import React, { ChangeEvent, FC } from 'react';
import { useAppStore } from 'store/appContext';
import { useObserver } from 'mobx-react-lite';
import { OrderTitleWrapper, Title } from './styled';

export const OrderTitle: FC = () => {
  const store = useAppStore();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    store.setOrderTitle(val);
  };

  return useObserver(() => (
    <OrderTitleWrapper>
      <Title
        value={store.orderInfo.title}
        onChange={onChange}
        placeholder="Заголовок заказа"
      />
    </OrderTitleWrapper>
  ));
};
