import { BrowserRouter, Routes, Route } from "react-router-dom";


import Heroi from './pages/heroi.js'

export default function Index(){
   return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Heroi/>} />
    </Routes>
    </BrowserRouter>


   ) 
}