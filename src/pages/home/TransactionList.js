import React from 'react';
import { useFirestore } from '../../hooks/useFirestore';

import { TransactionContainer } from './Home.styles';

export const TransactionList = ({ transactions, total }) => {
  const { deleteDocument } = useFirestore('transactions');

  const transactionLi = transactions.map(transaction => (
    <li key={transaction.id}>
      <p className='name'>{transaction.name}</p>
      <p className='amount'>CZK{transaction.amount}</p>
      <button onClick={() => deleteDocument(transaction.id)}>X</button>
    </li>
  ))

  return (
    <TransactionContainer>
      {transactionLi}
      <li style={{ marginTop: 40 }}><p className='name' style={{ textDecoration: 'underline' }}>Total:</p> <p className='amount'>CZK{total}</p></li>
    </TransactionContainer>
  )
}
