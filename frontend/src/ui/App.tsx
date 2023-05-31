import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { FourOhFour } from './FourOhFour'
import { ImageContent } from "./shared_components/ImageContent.tsx";
import {Navigation} from "./shared_components/NavBar.tsx";
import {CreateQuote} from "./CreateQuote.tsx";

export function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <ImageContent/>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/ImageContent' element={<ImageContent/>} />
                    <Route path={'/create-quote'} element={<CreateQuote />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}