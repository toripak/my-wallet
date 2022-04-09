import React, { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument, firestoreRes } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      name,
      amount,
      // pass in user's id for each transaction
      uid
    });

    // reset the form's input fields once the doc is successfully added to the db

  }
  useEffect(() => {
    if (firestoreRes.success) {
      setName('');
      setAmount('');
    }
  }, [firestoreRes.success])

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            autoFocus
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount (CZK):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add transaction</button>
      </form>
    </>
  )
}
