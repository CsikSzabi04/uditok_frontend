import React from 'react'
import '../App.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Szerkeszt() {

    async function modosit() {
        let n = document.getElementById("nev").value;
        let m = document.getElementById("meret").value;
        let k = document.getElementById("kep").value;
        let u = uaz;
        const response = await axios.put("http://localhost:88/udito", n, m, k, u);
    }

    
    const [uditok, setUditok] = useState([{ uaz : "loading", nev : "loading...", meret : "loading...", kep : "loading..." }]);
    const [refresh, setRefresh] = useState(false);

    const[nev, setNev] = useState("");
    const[meret, setMeret] = useState("");
    const[kep, setkep] = useState("");
    const[uaz, setUaz] = useState("");

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
    <div >
        <div className='mod'>
            <input type="text" placeholder='Név' id='nev' value={nev} onChange={e => (e.target.value)}/>
            <input type="text" placeholder='Méret' id='meret' value={meret} onChange={e => (e.target.value)}/>
            <input type="text" placeholder='Kép (url)' id='kep' value={kep} onChange={e => (e.target.value)}/>
            <input type="button" value="Módosít" className='modB' onClick={() => modosit}/>
        </div>

        <div className='lista' >
            {uditok.map((x,i) => 
                <div className="x" key={x.uaz} >
                    <div className='kep'><img src={x.kep} alt="" /> </div>
                    {x.nev} ({x.meret} Liter)
                </div>)}
        </div>

    </div>
  )
}
