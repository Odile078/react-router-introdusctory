// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAKWt5tlq_zH_5LSgu1bJKQFQAiiDuEdTE",
  authDomain: "vanlife-6b17b.firebaseapp.com",
  projectId: "vanlife-6b17b",
  storageBucket: "vanlife-6b17b.appspot.com",
  messagingSenderId: "11969785324",
  appId: "1:11969785324:web:588a7d5d5e7ce1766fe4c9",
  measurementId: "G-2QZMKK9L1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export const fetchVans = async () => {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
};

export const fetchVanDetails = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  console.log(vanSnapshot);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
};
// export const fetchVans = async () => {
//   const response = await fetch("/api/vans");
//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }
//   const data = await response.json();
//   return data.vans;
// };
export const fetchHostVans = async () => {
  const response = await fetch("/api/host/vans");
  if (!response.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
};
// export const fetchVanDetails = async (id) => {
//   const response = await fetch(`/api/host/vans/${id}`);
//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch the van details",
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }
//   const data = await response.json();
//   return data?.vans?.[0] || {};
// };

export const loginUser = async (creds) => {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
};
