import React, { ChangeEvent, FC, useState } from 'react';
import { Button } from 'generalStyled';
import { COLOR_BLUE, COLOR_PINK, ROUNDING_COEFFICIENT } from 'appConstants';
import { getCurrencyByCode } from 'services/currencyAPI';
import { observer } from 'mobx-react-lite';
import store from 'store/OrderStore';
import {
  CurrencyInput,
  CurrencyWrapper,
  CurrencyRate,
  CurrencyError,
  ButtonBlock,
} from './styled';

type ParcelCostProps = {};

export const Currency: FC<ParcelCostProps> = observer(() => {
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
    store.setCurrencyRate(rateCur);
  };

  const getCurrencyRateByAPI = async () => {
    try {
      let rateCur = await getCurrencyByCode(store.orderInfo.currency.code);
      rateCur =
        Math.floor(rateCur * ROUNDING_COEFFICIENT) / ROUNDING_COEFFICIENT;
      store.setCurrencyRate(rateCur);
      setError('');
    } catch (e) {
      setError('Курс не обновлен. Проверьте абревиатуру валюты.');
    }
  };

  const onChangeCurrencyInputHandle = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const regEx = new RegExp(/^[a-zA-Z]+$/);
    if (regEx.test(value) || value === '') {
      const code = value.toUpperCase();
      store.setCurrencyCode(code);
    }
  };

  return (
    <CurrencyWrapper>
      Валюта магазина
      <CurrencyInput
        value={store.orderInfo.currency.code}
        onChange={onChangeCurrencyInputHandle}
      />
      Курс
      <CurrencyRate>{store.orderInfo.currency.rate}</CurrencyRate>
      <ButtonBlock>
        <Button color={COLOR_PINK} onClick={() => getCurrencyRateByAPI()}>
          Получить
        </Button>
        <Button color={COLOR_BLUE} onClick={() => calculateRate()}>
          Вычислить
        </Button>
      </ButtonBlock>
      <CurrencyError>{error}</CurrencyError>
    </CurrencyWrapper>
  );
});
