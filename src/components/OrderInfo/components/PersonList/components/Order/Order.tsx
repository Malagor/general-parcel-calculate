import React, { FC, useCallback, useEffect, useState } from 'react';
import { Good, PersonalOrder } from 'types';
import { Button } from 'generalStyled';
import store from 'store/OrderStore';
import { List } from 'components';
import { observer } from 'mobx-react-lite';
import {
  DeliveryCheckbox,
  OrderHeader,
  OrderList,
  OrderWrapper,
  TotalPrice,
} from './styled';
import { GoodInfo, CreateNewGood } from './components';

interface OrderProps {
  order: PersonalOrder;
}

export const Order: FC<OrderProps> = observer(({ order }) => {
  const [total, setTotal] = useState(0);
  const countTotalPrice = useCallback(
    (orderList: PersonalOrder) =>
      orderList.goods.reduce((sum, good) => sum + good.price * good.count, 0),
    []
  );

  const onDeleteOrder = (id: string) => {
    store.deletePerson(id);
  };

  const setTotalOrderCost = useCallback(() => {
    setTotal(countTotalPrice(order));
  }, [order, countTotalPrice]);

  useEffect(() => {
    setTotalOrderCost();
  }, [setTotalOrderCost]);

  return (
    <OrderWrapper>
      <OrderHeader>
        {order.personName}
        <div>
          Доставка
          <DeliveryCheckbox
            checked={order.isDelivery}
            onChange={() => store.toggleDelivery(order.id)}
          />
        </div>
        <div>
          Сумма
          <TotalPrice>{total}</TotalPrice>
        </div>
        <div>Доставка</div>
        <Button onClick={() => onDeleteOrder(order.id)}>-</Button>
      </OrderHeader>
      <OrderList>
        <List
          items={order.goods}
          renderItem={(item: Good) => (
            <GoodInfo
              orderId={order.id}
              item={item}
              key={item.title}
              onDelete={setTotalOrderCost}
            />
          )}
        />
        <CreateNewGood orderId={order.id} onCreate={setTotalOrderCost} />
      </OrderList>
    </OrderWrapper>
  );
});
