import React from 'react'
import '../App.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Uditok() {

    const [uditok, setUditok] = useState([{ uaz : "loading", nev : "loading...", meret : "loading...", kep : "loading..." }]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        async function getUditok() {
            const resp = await fetch("http://localhost:88/uditok");
            const json = await resp.json();
            setUditok(json);
            console.log(json);
        }
        getUditok();
    }, [refresh]);

  return (
    <div className='lista'>
        {uditok.map((x,i) => 
            <div className="x" key={x.uaz}>
                <div className='kep'><img src={x.kep} alt="" /> </div>
                {x.nev} ({x.meret} Liter)
            </div>)}
            
    </div>
  )
}
