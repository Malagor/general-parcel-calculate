import React, { FC } from 'react';
import { LIST_ORDER_COLUMN_HEADER } from 'appConstants';
import { ListHeaderWrapper } from './styled';

type ListHeaderProps = {};

export const ListHeader: FC<ListHeaderProps> = () => (
  <ListHeaderWrapper>
    {LIST_ORDER_COLUMN_HEADER.map((item) => (
      <div key={item.title} style={{ width: item.width }}>
        {item.title}
      </div>
    ))}
  </ListHeaderWrapper>
);
