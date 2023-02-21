import './index.css'; 

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { ChoosePack } from './pages/ChoosePack/ChoosePack';
import { Perfil } from './pages/Perfil/Perfil'
import { SelectImg } from './pages/Perfil/SelectImg/SelectImg';
import { Home } from './pages/Home/Home'
import { AAA } from './pages/AAA/AAA';
import { Retro } from './pages/Retro/Retro'
import { Indie } from './pages/Indie/Indie'
import { Launch } from './pages/Launch/Launch';
import { About } from './pages/About/About';
import { NotFound } from './pages/NotFound/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NickProvider } from './contexts/Nick';
import { ImgProvider } from './contexts/Img';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <ImgProvider>
     <NickProvider>
     <Routes>
      <Route path='/' element={<ChoosePack />}/>
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/home' element={<Home />} />
      <Route path='/AAA' element={<AAA />} />
      <Route path='/indie' element={<Indie />} />
      <Route path='/retro' element={<Retro />} />
      <Route path='/launch' element={<Launch />} />
      <Route path='/about' element={<About />} />
      <Route path='/select-char' element={<SelectImg />} />
      <Route path='*' element={<NotFound />}/>
     </Routes>
     </NickProvider>
     </ImgProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
