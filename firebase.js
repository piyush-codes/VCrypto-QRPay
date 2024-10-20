import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwNXDHaiyiHXzMk8CfkOowL90Pb4CcRYI",
  authDomain: "qrpayment-417017.firebaseapp.com",
  projectId: "qrpayment-417017",
  storageBucket: "qrpayment-417017.appspot.com",
  messagingSenderId: "712363134343",
  appId: "1:712363134343:web:e805d911c858d7b6521722",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
