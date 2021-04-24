import React, { ChangeEvent, FC, useCallback } from 'react';
import { useAppStore } from 'store/appContext';
import { useObserver } from 'mobx-react-lite';
import { DeliveryInput, DeliveryWrapper } from './styled';

type ParcelCostProps = {};

export const DeliveryCost: FC<ParcelCostProps> = () => {
  const store = useAppStore();

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!isNaN(+e.target.value)) {
        store.setDeliveryCost(+e.target.value);
      }
    },
    [store]
  );

  return useObserver(() => (
    <DeliveryWrapper>
      Стоимость доставки
      <DeliveryInput
        value={store.orderInfo?.deliveryCost || ''}
        onChange={onChangeHandler}
      />
      <div>{store.orderInfo.currency.code}</div>
    </DeliveryWrapper>
  ));
};
