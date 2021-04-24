import React, { FC } from 'react';
import { Good, PersonalOrder } from 'types';
import { Button } from 'generalStyled';
import store from 'store/OrderStore';
import { List } from 'components';
import { observer } from 'mobx-react-lite';
import { OrderHeader, OrderList, OrderWrapper } from './styled';
import { GoodInfo, CreateNewGood } from './components';

interface OrderProps {
  order: PersonalOrder;
}

export const Order: FC<OrderProps> = observer(({ order }) => {
  const onDeleteOrder = (id: string) => {
    store.deletePerson(id);
  };

  return (
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
  );
});
