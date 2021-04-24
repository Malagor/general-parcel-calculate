import React, { FC } from 'react';
import { Good } from 'types';
import { Button } from 'generalStyled';
import store from 'store/OrderStore';
import { observer } from 'mobx-react-lite';
import {
  GoodInfoWrapper,
  GoodCount,
  GoodLink,
  GoodPrice,
  GoodTitle,
} from './styled';

type GoodInfoProps = {
  item: Good;
  orderId: string;
};

export const GoodInfo: FC<GoodInfoProps> = observer(({ orderId, item }) => (
  <GoodInfoWrapper>
    <GoodTitle>{item.title}</GoodTitle>
    <GoodLink href={item.link} target="_blank">
      {item.link}
    </GoodLink>
    <GoodPrice>{item.price}</GoodPrice>
    <GoodCount>{item.count}</GoodCount>
    <Button onClick={() => store.deleteGood(orderId, item.id)}>-</Button>
  </GoodInfoWrapper>
));
