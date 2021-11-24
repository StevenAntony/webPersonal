import React, {Fragment, useState, useRef,useEffect } from 'react';
import {Header} from './components/layouts/Header.jsx';
import {Cover} from './components/page/Cover.jsx';
import {Servicio} from './components/page/Servicio.jsx';
import 'jquery';
import '@popperjs/core'; // Edit here
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/css/Style.css'

export function App() {
  const [routes, setRoutes] = useState([
    { id:1,link:"./",name:"Inicio",state:true},
    { id:2,link:"#servicio",name:"Servicio",state:false},
    { id:3,link:"#portafolio",name:"Portafolio",state:false},
    { id:4,link:"#habilidad",name:"Habilidad",state:false},
    { id:5,link:"#contacto",name:"Contacto",state:false}
  ]);

  const [scroll,setScroll] = useState([
    {state:false}
  ]);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
      return () => {
          window.removeEventListener('scroll', isSticky);
      };
  });

  const isSticky = (e) => {
      const header = document.querySelector('.header-section');
      const scrollTop = window.scrollY;
      if (scrollTop >= 250) {
        setScroll([{ state: true }]) 
      } else {
        setScroll([{ state: false }]) 
      }
  };

  // window.addEventListener('scroll',(event) => {
  //   const scrollTop = window.scrollY;
  //     // 
  //   })
  return (
      <Fragment>
        <Header scroll={scroll[0]} routes={routes} />
        <div  className='page-cover'>
          <Cover />
        </div>
        <Servicio />
      </Fragment>
    );
}

// export default App
