import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { FourOhFour } from './FourOhFour'
import {CreateQuote} from "./createquote/CreateQuote.tsx";
import {DisplayQuote} from "./DisplayQuote.tsx";
import {Profile} from "./Profile.tsx";
import {Provider} from "react-redux";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
// import {SignIn} from "./SignIn/SignIn";

interface Props {
    store: ToolkitStore
}
export function App(props: Props) {
    const {store} = props
    return (
        <>
         <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path={'/create-quote'} element={<CreateQuote />} />
                    <Route path={'/display-quote'} element={<DisplayQuote />} />
                    <Route path={'/profile'} element={<Profile />} />
                    {/*<Route path={'/sign-in'} element={<SignIn />} />*/}
                </Routes>
            </BrowserRouter>
        </Provider>
        </>
    )
}