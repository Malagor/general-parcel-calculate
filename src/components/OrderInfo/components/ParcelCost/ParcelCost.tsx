import React, { FC, useCallback, useEffect } from 'react';
import { useAppStore } from 'store/appContext';
import { useObserver } from 'mobx-react-lite';
import { ParcelInput, ParcelWrapper } from './styled';

type ParcelCostProps = {};

export const ParcelCost: FC<ParcelCostProps> = () => {
  const store = useAppStore();

  const onChangeHandler = useCallback(
    (e) => {
      const newCost = +e.target.value;
      if (!isNaN(newCost)) {
        store.setParcelCost(+e.target.value);
      }
    },
    [store]
  );

  const countTotalParcelCost = useCallback(() => {
    const ordersCost = store.personalOrders.reduce(
      (orderSum, order) =>
        orderSum +
        order.goods.reduce((sum, good) => sum + good.price * good.count, 0),
      0
    );

    store.setParcelCost(ordersCost);
  }, [store]);

  useEffect(() => {
    countTotalParcelCost();
  }, [countTotalParcelCost]);

  return useObserver(() => (
    <ParcelWrapper>
      Стоимость посылки
      <ParcelInput
        value={store.orderInfo.parcelCost || ''}
        onChange={onChangeHandler}
      />
      <div>{store.orderInfo.currency.code}</div>
    </ParcelWrapper>
  ));
};
