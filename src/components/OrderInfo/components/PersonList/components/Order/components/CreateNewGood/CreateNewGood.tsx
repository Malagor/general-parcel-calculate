import React, { FC, RefObject, useRef, useState } from 'react';
import { Button } from 'generalStyled';
import { useAppStore } from 'store/appContext';
import { Good } from 'types';
import { nanoid } from 'nanoid';
import { COLOR_BLUE } from 'appConstants';
import {
  NewGoodWrapper,
  CountInput,
  LinkInput,
  PriceInput,
  TitleInput,
} from './styled';

type CreateNewGoodProps = {
  orderId: string;
};

export const CreateNewGood: FC<CreateNewGoodProps> = ({ orderId }) => {
  const state = useAppStore();

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);

  const titleRef: RefObject<HTMLInputElement> = useRef(null);

  const onAddGoodHandle = () => {
    if (title && price && count) {
      const good: Good = {
        count,
        id: nanoid(),
        link,
        price,
        title,
      };
      state.addGood(orderId, good);
      setCount(0);
      setPrice(0);
      setTitle('');
      setLink('');

      if (titleRef && titleRef.current) {
        titleRef.current.focus();
      }
    }
  };

  return (
    <NewGoodWrapper>
      <TitleInput
        ref={titleRef}
        type="text"
        value={title}
        placeholder="Название"
        onChange={(e) => setTitle(e.target.value)}
      />
      <LinkInput
        type="text"
        value={link}
        placeholder="Ссылка"
        onChange={(e) => setLink(e.target.value)}
      />
      <PriceInput
        type="text"
        value={price}
        placeholder="Цена"
        onChange={(e) => setPrice(+e.target.value)}
      />
      <CountInput
        type="text"
        value={count}
        placeholder="Количество"
        onChange={(e) => setCount(+e.target.value)}
      />
      <Button onClick={() => onAddGoodHandle()} color={COLOR_BLUE}>
        +
      </Button>
    </NewGoodWrapper>
  );
};
