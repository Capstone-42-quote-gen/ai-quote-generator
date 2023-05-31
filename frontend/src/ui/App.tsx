import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { FourOhFour } from './FourOhFour'
import { ImageContent } from "./shared_components/ImageContent.tsx";
import {CreateQuote} from "./CreateQuote.tsx";
import {DisplayQuote} from "./DisplayQuote.tsx";

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/ImageContent' element={<ImageContent/>} />
                    <Route path={'/create-quote'} element={<CreateQuote />} />
                    <Route path={'/display-quote'} element={<DisplayQuote />} />
                    <Route path={'/display-quote'} element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}