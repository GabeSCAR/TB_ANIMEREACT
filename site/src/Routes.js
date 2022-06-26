import { BrowserRouter, Routes, Route } from "react-router-dom"

import Anime from './pages/anime'


export default function () {
    return(
        <BrowserRouter>
        <Routes>

            <Route path='/Anime' element={<Anime  />} />
        </Routes>
        </BrowserRouter>
    )
}