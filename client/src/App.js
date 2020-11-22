import React from 'react';
import { MainLayoutPage } from "../src/pages/mainLayout/MainLayout";
import { Services} from './pages/services/servicesPage';
import { Gallery } from './pages/gallery/gallery.tsx'
import {BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from '../src/core/components/navbar/navbar';
import { Footer } from '../src/core/components/footer/footer';

function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar />
      <Route exact path='/' component={MainLayoutPage}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/gallery' component={Gallery}/>
      <Footer/>
      </div>
    </BrowserRouter>
   
 
  );
}

export default App;
