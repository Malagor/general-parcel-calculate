import React, { FC, useCallback } from 'react';
import { useAppStore } from 'store/appContext';
import { useObserver } from 'mobx-react-lite';
import { ParcelInput, ParcelWrapper } from './styled';

type ParcelCostProps = {};

export const ParcelCost: FC<ParcelCostProps> = () => {
  // const {
  //   orderInfo: {
  //     parcelCost,
  //     currency: { name: currencyCode },
  //   },
  //   setParcelCost,
  // } = useAppStore();

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

  return useObserver(() => (
    <ParcelWrapper>
      Стоимость посылки
      <ParcelInput
        value={store.orderInfo.parcelCost || ''}
        onChange={onChangeHandler}
      />
      <div>{store.orderInfo.currency.name}</div>
    </ParcelWrapper>
  ));
};
