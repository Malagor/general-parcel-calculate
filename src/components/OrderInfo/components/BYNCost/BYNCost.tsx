import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import store from 'store/OrderStore';
import { BYNCostInput, BYNCostWrapper } from './styled';

type ParcelCostProps = {};

export const BYNCost: FC<ParcelCostProps> = observer(() => (
  <BYNCostWrapper>
    Уплочено
    <BYNCostInput
      value={store.orderInfo.generalCostInBYN || ''}
      onChange={(event) => store.setGeneralCostInBYN(+event.target.value)}
    />
    <div>BYN</div>
  </BYNCostWrapper>
));
