import React from 'react';

import { TransactionContainer } from './Home.styles';

export const TransactionList = ({ transactions }) => {
  const transactionLi = transactions.map(transaction => (
    <li key={transaction.id}>
      <p className='name'>{transaction.name}</p>
      <p className='amount'>CZK{transaction.amount}</p>
    </li>
  ))

  return (
    <TransactionContainer>
      {transactionLi}
    </TransactionContainer>
  )
}
