'use client'
import { useRouter } from "next/navigation";
import {  useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from '@/data/firebase'

export default function PrivateRouter({children}){
    const [user, setUser]= useState('')
    const auth = getAuth();
    const router= useRouter(firebase)
    useEffect(()=>{

        onAuthStateChanged(auth, (myUser) => {
            if(!myUser){
                console.log(myUser)
                router.push('/')
            }else{
                setUser(myUser)
                console.log()
            }
        });
    },[user, router])
    return user ? children: null
}