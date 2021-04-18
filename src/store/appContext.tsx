import React, { createContext, FC, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { Good, PersonalOrder, Store } from 'types';
import { createAppStore } from './appStore';

const AppContext = createContext<Store>({
  id: '',
  orderInfo: {
    date: new Date(),
    title: '',
    currency: { name: '', rate: 0 },
    deliveryCost: 0,
    generalCostInBYN: 0,
    parcelCost: 0,
  },
  personalOrders: [],
  setOrderTitle(title: string): void {},
  setCurrency(currency: { name?: string; rate?: number }): void {},

  setParcelCost(parcelCost: number): void {},
  setDeliveryCost(deliveryCost: number): void {},
  setGeneralCostInBYN(costInBYN: number): void {},
  addGood(personId: string, good: Good): void {},
  addPerson(personData: PersonalOrder): void {},
  deleteGood(personId: string, goodId: string): void {},
  deletePerson(personId: string): void {},
});

export const AppStoreProvider: FC = ({ children }) => {
  const store = useLocalStore(createAppStore);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppStore = () => useContext(AppContext);
