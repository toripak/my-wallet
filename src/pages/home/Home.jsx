import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';

// styles
import { Wrapper, Sidebar } from './Home.styles';

export const Home = () => {
  const [total, setTotal] = useState(null);
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );

  useEffect(() => {
    if (documents?.length > 0) {
      const _total = documents
        .map(document => parseInt(document.amount))
        .reduce((acc, cur) => acc + cur, 0);
      console.log(total);
      setTotal(_total);
    }
  }, [documents])

  return (
    <Wrapper>
      {error && <p>{error}</p>}
      {documents && <TransactionList transactions={documents} total={total} />}
      <Sidebar>
        <TransactionForm uid={user.uid} />
      </Sidebar>
    </Wrapper>
  )
}
