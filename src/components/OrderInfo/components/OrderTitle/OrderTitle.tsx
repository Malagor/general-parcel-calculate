import React, { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react-lite';
import store from 'store/OrderStore';
import { OrderTitleWrapper, Title } from './styled';

export const OrderTitle: FC = observer(() => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    store.setOrderTitle(val);
  };

  return (
    <OrderTitleWrapper>
      <Title
        value={store.orderInfo.title}
        onChange={onChange}
        placeholder="Заголовок заказа"
      />
    </OrderTitleWrapper>
  );
});
