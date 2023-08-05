import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { DataTable } from "@/components/DataTable/DataTable";
import Login from "@/components/Login/Login";
import {columns} from "@/utils/columns";
import { dummyData } from '@/utils/dummyData';
import {useState} from 'react';

const inter = Inter({ subsets: ['latin'] })
import firebase from 'firebase/app';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

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
//const analytics = getAnalytics(app);

export default function Home() {
  let [flag,setFlag] = useState(false)

  return (
    <>
    <Login setFlag={setFlag}/>
    {flag && <DataTable columns={columns} data={dummyData} />}
    </>
  )
}
