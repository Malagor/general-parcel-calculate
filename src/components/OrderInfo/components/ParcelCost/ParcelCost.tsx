import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { ParcelWrapper, Cost } from './styled';

type ParcelCostProps = {
  cost: number;
  currency: string;
};

export const ParcelCost: FC<ParcelCostProps> = observer(
  ({ currency, cost }) => (
    <ParcelWrapper>
      Стоимость посылки
      <Cost>{cost}</Cost>
      <div>{currency}</div>
    </ParcelWrapper>
  )
);
