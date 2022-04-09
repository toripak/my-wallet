import { collection, addDoc } from "firebase/firestore";
import { useReducer, } from "react";
import { database, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isLoading: false,
  error: null,
  success: null
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { isLoading: true, document: null, success: false, error: null };
    case 'NEW_DOCUMENT':
      return { isLoading: false, document: action.payload, success: true, error: null };
    case 'ERROR':
      return { isLoading: false, document: null, error: action.payload, success: false };
    default:
      return state;
  }
}

export const useFirestore = (transactions) => {
  const [firestoreRes, dispatch] = useReducer(firestoreReducer, initialState);

  // reference to collection
  const ref = collection(database, transactions);

  //add document
  const addDocument = async (document) => {
    dispatch({ type: 'IS_LOADING' });

    //try to add a document to collection
    try {
      const createdAt = timestamp.fromDate(new Date());
      const newDocument = await addDoc(ref, { ...document, createdAt });
      dispatch({ type: 'NEW_DOCUMENT', payload: newDocument });
    }
    catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  }

  // delete a document
  const deleteDocument = async (id) => {

  }

  // useEffect(() => {

  // }, [])

  return { addDocument, deleteDocument, firestoreRes };
}