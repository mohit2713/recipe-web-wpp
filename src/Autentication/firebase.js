// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCTXiyE2fWgd6qygRHP3VlalP6u0EA7kg",
  authDomain: "recipe-app-auth-264ca.firebaseapp.com",
  projectId: "recipe-app-auth-264ca",
  storageBucket: "recipe-app-auth-264ca.appspot.com",
  messagingSenderId: "772196745810",
  appId: "1:772196745810:web:4d91c2ca86f2eda5b6d58b",
  measurementId: "G-JVBJZQWPRX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
