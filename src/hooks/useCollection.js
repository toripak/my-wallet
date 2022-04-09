import { useEffect, useState, useRef } from "react";
import { database } from "../firebase/config";
import { collection, orderBy, onSnapshot, query, where } from 'firebase/firestore';

export const useCollection = (transactions, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // wrap _query & _orderBy :array in useRef in order to prevent re-rendering when updated
  const q = useRef(_query).current;
  const ordBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = collection(database, transactions);

    if (q) {
      ref = query(ref, where(...q)); // getting transactions with uid == user's id, rendering data that belongs to currently logged in user
    };
    if (ordBy) {
      ref = query(ref, orderBy(...ordBy));
    }

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach(d => {
        results.push({ ...d.data(), id: d.id });
      })
      setDocuments(results);
      setError(null);
    }, (error) => {
      console.log(error);
      setError('Could not fetch the data');
    })
    return () => unsubscribe();

  }, [transactions, q, ordBy]);

  return { documents, error };

}