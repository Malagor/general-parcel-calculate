import React, { ChangeEvent, FC, useState } from 'react';
import store from 'store/OrderStore';
import { Button } from 'generalStyled';
import { PersonalOrder } from 'types';
import { nanoid } from 'nanoid';
import { COLOR_BLUE } from 'appConstants';
import { observer } from 'mobx-react-lite';
import { CreateOrderWrapper } from './styled';

type CreateNewOrderProps = {};

export const CreateNewOrder: FC<CreateNewOrderProps> = observer(() => {
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
});
