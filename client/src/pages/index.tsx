import { useState } from "react";
import Login from "@/components/Login/Login";
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCh0kqbeT_s25SPEqPhP8pNUt3YoKsAJjo",
  authDomain: "coding-challenge-ff923.firebaseapp.com",
  projectId: "coding-challenge-ff923",
  storageBucket: "coding-challenge-ff923.appspot.com",
  messagingSenderId: "258263795241",
  appId: "1:258263795241:web:16f9c4c4dbce904da0fe38",
  measurementId: "G-3W7W4FXPGE"
};

const app = initializeApp(firebaseConfig);

export default function Home() {
  const [flag, setFlag] = useState<boolean>(false);

  return (
      <Login setFlag={setFlag} />
  )
}