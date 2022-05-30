import React, { useState , useContext, useEffect} from "react";
import "./index.css";
import { AuthContext } from '../../context/authProvider';
import SideBar from '../../components/SideBar';
import Collection from './components/Collection';

export default function Home() {
   
    return (
       <div className='mainHome'>
           <SideBar></SideBar>
           <Collection></Collection>
       </div>
    );
}