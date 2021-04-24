import React, { FC } from 'react';
import { List } from 'components';
import store from 'store/OrderStore';
import { observer } from 'mobx-react-lite';
import { PersonalOrder } from 'types';
import { CreateNewOrder, Order } from './components';
import { OrderListTitle, PersonListWrapper } from './styled';

export const PersonList: FC = observer(() => (
  <PersonListWrapper>
    <OrderListTitle>Содержимое посылки</OrderListTitle>
    <List
      items={store.personalOrders}
      renderItem={(order: PersonalOrder) => (
        <Order key={order.id} order={order} />
      )}
    />
    <CreateNewOrder />
  </PersonListWrapper>
));
