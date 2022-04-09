import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';

// styles
import { Wrapper, Sidebar } from './Home.styles';

export const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );

  return (
    <Wrapper>
      {error && <p>{error}</p>}
      {documents && <TransactionList transactions={documents} />}
      <Sidebar>
        <TransactionForm uid={user.uid} />
      </Sidebar>
    </Wrapper>
  )
}
