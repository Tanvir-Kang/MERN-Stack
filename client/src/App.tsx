import React from 'react';
import { MainLayoutPage } from "./pages/mainLayout/MainLayout";
import { Services} from './pages/services/servicesPage';
import { Gallery } from './pages/gallery/gallery'
import {BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from './core/components/navbar/navbar';
import { Footer } from './core/components/footer/footer';
import { httpService, IHttpService } from './core/httpService';

const HTTPService = new httpService();
const GalleryPage = Gallery(HTTPService);

function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar />
      <Route exact path='/' component={MainLayoutPage}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/gallery' render={(HTTPService: IHttpService)=> <Gallery {...HTTPService}/>} />
      <Footer/>
      </div>
    </BrowserRouter>
   
 
  );
}

export default App;
