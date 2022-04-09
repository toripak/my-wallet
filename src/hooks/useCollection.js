import { useEffect, useState } from "react";
import { auth, database } from "../firebase/config";
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';

export const useCollection = (transactions, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(database, transactions);

    if (query) {
      ref = query(ref, where(..._query)); // getting transactions with uid == user's id, rendering data that belongs to currently logged in user
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

  }, [transactions, _query]);

  return { documents, error };

}