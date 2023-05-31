import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { FourOhFour } from './FourOhFour'
import { ImageContent } from "./shared_components/ImageContent.tsx";
import {CreateQuote} from "./CreateQuote.tsx";

export function App() {
    return (
        <>
            <BrowserRouter>
<<<<<<< HEAD
                <Routes>
=======
                <Navigation/>
                 <Routes>
>>>>>>> 3c5258b6e951f41c077399f362d7831e8f8c496a
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/ImageContent' element={<ImageContent/>} />
                    <Route path={'/create-quote'} element={<CreateQuote />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}