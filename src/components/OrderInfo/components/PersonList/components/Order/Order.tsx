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
  OrderPersonName,
  OrderWrapper,
  TotalPrice,
} from './styled';
import { GoodInfo, CreateNewGood, ListHeader } from './components';

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

  const onChangeOrders = useCallback(() => {
    setTotalOrderCost();
    // calculateDelivery();
  }, [setTotalOrderCost]);

  useEffect(() => {
    onChangeOrders();
  }, [onChangeOrders]);

  return (
    <OrderWrapper>
      <OrderHeader>
        <OrderPersonName>{order.personName}</OrderPersonName>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="del">Доставлять</label>
          <DeliveryCheckbox
            id="del"
            checked={order.isDelivery}
            onChange={() => store.toggleDelivery(order.id)}
          />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          Сумма
          <TotalPrice>{total}</TotalPrice>
          {store.orderInfo.currency.code}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          Доставка
          <div>{order.personalDeliveryCost.toFixed(2)}</div>
          {store.orderInfo.currency.code}
        </div>

        <Button onClick={() => onDeleteOrder(order.id)}>-</Button>
      </OrderHeader>
      <OrderList>
        <ListHeader />
        <List
          items={order.goods}
          renderItem={(item: Good) => (
            <GoodInfo
              orderId={order.id}
              item={item}
              key={item.title}
              onDelete={onChangeOrders}
            />
          )}
        />
        <CreateNewGood orderId={order.id} onCreate={onChangeOrders} />
      </OrderList>
    </OrderWrapper>
  );
});
