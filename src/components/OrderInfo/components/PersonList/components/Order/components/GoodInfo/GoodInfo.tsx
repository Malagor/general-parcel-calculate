import React, { FC, useCallback } from 'react';
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
  ButtonWrapper,
} from './styled';

type GoodInfoProps = {
  item: Good;
  orderId: string;
  onDelete: () => void;
};

export const GoodInfo: FC<GoodInfoProps> = observer(
  ({ orderId, item, onDelete }) => {
    const onDeleteHandle = useCallback(() => {
      store.deleteGood(orderId, item.id);
      onDelete();
    }, [onDelete, item.id, orderId]);

    return (
      <GoodInfoWrapper>
        <GoodTitle>{item.title}</GoodTitle>
        <GoodLink href={item.link} target="_blank">
          {item.link}
        </GoodLink>
        <GoodPrice>{item.price}</GoodPrice>
        <GoodCount>{item.count}</GoodCount>
        <ButtonWrapper>
          <Button onClick={() => onDeleteHandle()}>-</Button>
        </ButtonWrapper>
      </GoodInfoWrapper>
    );
  }
);
