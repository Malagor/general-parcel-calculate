import React, { ChangeEvent, FC, useState } from 'react';
import { useAppStore } from 'store/appContext';
import { Button } from 'generalStyled';
import { PersonalOrder } from 'types';
import { nanoid } from 'nanoid';
import { COLOR_BLUE } from 'appConstants';
import { CreateOrderWrapper } from './styled';

type CreateNewOrderProps = {};

export const CreateNewOrder: FC<CreateNewOrderProps> = () => {
  const store = useAppStore();

  const [name, setName] = useState('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const newOrder = (personName: string) => {
    const order: PersonalOrder = {
      goods: [],
      id: nanoid(),
      isDelivery: true,
      personName,
    };
    store.addPerson(order);
    setName('');
  };

  return (
    <CreateOrderWrapper>
      <input type="text" value={name} onChange={onChangeName} />
      <Button onClick={() => newOrder(name)} color={COLOR_BLUE}>
        +
      </Button>
    </CreateOrderWrapper>
  );
};
