import React from 'react';
import { useObserver } from 'mobx-react-lite';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
  return useObserver(() => <div>{props.items.map(props.renderItem)}</div>);
}
