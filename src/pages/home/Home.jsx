import React from 'react';

import { Wrapper, TransactionList, Sidebar } from './Home.styles';
import { TransactionForm } from './TransactionForm';

export const Home = () => {
  return (
    <Wrapper>
      <TransactionList>
        Transactions list
      </TransactionList>
      <Sidebar>
        <TransactionForm />
      </Sidebar>
    </Wrapper>
  )
}
