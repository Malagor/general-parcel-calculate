import React, { FC, useCallback, useEffect } from 'react';
import store from 'store/OrderStore';
import { observer } from 'mobx-react-lite';
import { ParcelInput, ParcelWrapper } from './styled';

type ParcelCostProps = {};

export const ParcelCost: FC<ParcelCostProps> = observer(() => {
  const onChangeHandler = useCallback((e) => {
    const newCost = +e.target.value;
    if (!isNaN(newCost)) {
      store.setParcelCost(+e.target.value);
    }
  }, []);

  const countTotalParcelCost = useCallback(() => {
    const ordersCost = store.personalOrders.reduce(
      (orderSum, order) =>
        orderSum +
        order.goods.reduce((sum, good) => sum + good.price * good.count, 0),
      0
    );

    store.setParcelCost(ordersCost);
  }, []);

  useEffect(() => {
    countTotalParcelCost();
  }, [countTotalParcelCost]);

  return (
    <ParcelWrapper>
      Стоимость посылки
      <ParcelInput
        value={store.orderInfo.parcelCost || ''}
        onChange={onChangeHandler}
      />
      <div>{store.orderInfo.currency.code}</div>
    </ParcelWrapper>
  );
});
