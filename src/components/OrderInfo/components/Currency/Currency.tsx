import React, { ChangeEvent, FC, useState } from 'react';
import { useAppStore } from 'store/appContext';
import { Button } from 'generalStyled';
import { COLOR_BLUE, COLOR_PINK, ROUNDING_COEFFICIENT } from 'appConstants';
import { getCurrencyByCode } from 'servises/currencyAPI';
import { useObserver } from 'mobx-react-lite';
import {
  CurrencyInput,
  CurrencyWrapper,
  CurrencyRate,
  CurrencyError,
  ButtonBlock,
} from './styled';

type ParcelCostProps = {};

export const Currency: FC<ParcelCostProps> = () => {
  const store = useAppStore();
  const [error, setError] = useState('');

  const calculateRate = () => {
    if (!store.orderInfo.parcelCost || !store.orderInfo.generalCostInBYN)
      return;
    const sum =
      store.orderInfo.parcelCost + (store.orderInfo.deliveryCost || 0);
    const rateCur =
      Math.floor(
        (store.orderInfo.generalCostInBYN / sum) * ROUNDING_COEFFICIENT
      ) / ROUNDING_COEFFICIENT;
    store.setCurrency({ rate: rateCur });
  };

  const getCurrencyByAPI = async () => {
    try {
      let rateCur = await getCurrencyByCode(store.orderInfo.currency.name);
      rateCur =
        Math.floor(rateCur * ROUNDING_COEFFICIENT) / ROUNDING_COEFFICIENT;
      store.setCurrency({ rate: rateCur });
      setError('');
    } catch (e) {
      setError('Курс не обновлен. Проверьте абревиатуру валюты.');
    }
  };

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const regEx = new RegExp(/^[a-zA-Z]+$/);
    if (regEx.test(value)) {
      store.setCurrency({ name: value.toUpperCase() });
    }
  };

  return useObserver(() => (
    <CurrencyWrapper>
      Валюта магазина
      <CurrencyInput
        value={store.orderInfo.currency.name || ''}
        onChange={onChangeHandle}
      />
      Курс
      <CurrencyRate>{store.orderInfo.currency.rate}</CurrencyRate>
      <ButtonBlock>
        <Button color={COLOR_PINK} onClick={() => getCurrencyByAPI()}>
          Получить
        </Button>
        <Button color={COLOR_BLUE} onClick={() => calculateRate()}>
          Вычислить
        </Button>
      </ButtonBlock>
      <CurrencyError>{error}</CurrencyError>
    </CurrencyWrapper>
  ));
};
