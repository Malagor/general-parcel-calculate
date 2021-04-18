import React, { FC } from 'react';
import { DateWrapper } from './styled';

type OrderDateProps = {
  data: Date;
};
export const OrderDate: FC<OrderDateProps> = ({ data }) => (
  <DateWrapper>
    {data.toLocaleString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
  </DateWrapper>
);
