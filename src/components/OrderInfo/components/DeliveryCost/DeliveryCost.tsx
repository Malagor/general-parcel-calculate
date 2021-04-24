import React, { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react-lite';
import store from 'store/OrderStore';
import { DeliveryInput, DeliveryWrapper } from './styled';

type ParcelCostProps = {};

export const DeliveryCost: FC<ParcelCostProps> = observer(() => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(+e.target.value)) {
      store.setDeliveryCost(+e.target.value);
    }
  };

  return (
    <DeliveryWrapper>
      Стоимость доставки
      <DeliveryInput
        value={store.orderInfo?.deliveryCost || ''}
        onChange={onChangeHandler}
      />
      <div>{store.orderInfo.currency.code}</div>
    </DeliveryWrapper>
  );
});
