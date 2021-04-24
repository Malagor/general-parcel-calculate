import React, { FC } from 'react';
import { Good } from 'types';
import { Button } from 'generalStyled';
import { useAppStore } from 'store/appContext';
import { useObserver } from 'mobx-react-lite';
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

export const GoodInfo: FC<GoodInfoProps> = ({ orderId, item }) => {
  const state = useAppStore();

  return useObserver(() => (
    <GoodInfoWrapper>
      <GoodTitle>{item.title}</GoodTitle>
      <GoodLink href={item.link} target="_blank">
        {item.link}
      </GoodLink>
      <GoodPrice>{item.price}</GoodPrice>
      <GoodCount>{item.count}</GoodCount>
      <Button onClick={() => state.deleteGood(orderId, item.id)}>-</Button>
    </GoodInfoWrapper>
  ));
};
