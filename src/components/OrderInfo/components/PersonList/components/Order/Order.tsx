import React, { FC } from 'react';
import { Good, PersonalOrder } from 'types';
import { Button } from 'generalStyled';
import { useAppStore } from 'store/appContext';
import { List } from 'components';
import { useObserver } from 'mobx-react-lite';
import { OrderHeader, OrderList, OrderWrapper } from './styled';
import { GoodInfo } from './components/GoodInfo';
import { CreateNewGood } from './components/CreateNewGood';

interface OrderProps {
  order: PersonalOrder;
}

export const Order: FC<OrderProps> = ({ order }) => {
  const store = useAppStore();

  const onDeleteOrder = (id: string) => {
    store.deletePerson(id);
  };

  return useObserver(() => (
    <OrderWrapper>
      <OrderHeader>
        {order.personName}
        <Button onClick={() => onDeleteOrder(order.id)}>-</Button>
      </OrderHeader>
      <OrderList>
        <List
          items={order.goods}
          renderItem={(item: Good) => (
            <GoodInfo orderId={order.id} item={item} key={item.title} />
          )}
        />
        <CreateNewGood orderId={order.id} />
      </OrderList>
    </OrderWrapper>
  ));
};
