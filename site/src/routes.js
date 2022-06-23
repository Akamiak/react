import { BrowserRouter, Routes, Route } from "react-router-dom";


import Heroi from './pages/pet.js'

export default function Index(){
   return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Heroi/>} />
    </Routes>
    </BrowserRouter>


   ) 
}