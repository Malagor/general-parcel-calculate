import React, { FC } from 'react';
import { useAppStore } from 'store/appContext';
import { useObserver } from 'mobx-react-lite';
import { BYNCostInput, BYNCostWrapper } from './styled';

type ParcelCostProps = {};

export const BYNCost: FC<ParcelCostProps> = () => {
  const store = useAppStore();

  return useObserver(() => (
    <BYNCostWrapper>
      Уплочено
      <BYNCostInput
        value={store.orderInfo.generalCostInBYN || ''}
        onChange={(event) => store.setGeneralCostInBYN(+event.target.value)}
      />
      <div>BYN</div>
    </BYNCostWrapper>
  ));
};
