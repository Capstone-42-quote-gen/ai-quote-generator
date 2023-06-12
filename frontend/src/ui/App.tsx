import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.tsx'
import { FourOhFour } from './FourOhFour'
import {Profile} from "./Profile";
import {Provider} from "react-redux";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import {CreateQuote} from "../shared/components/createquote/CreateQuote";
import {SignIn} from "../shared/components/SignIn/SignIn";
import {SignUp} from "../shared/components/signup/SignUp";
import {DisplayQuote} from "../shared/components/createquote/DisplayQuote";


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
                    <Route path={'/display-quote/:postId'} element={<DisplayQuote />} />
                    <Route path={'/profile'} element={<Profile />} />
                    <Route path={'/sign-in'} element={<SignIn />} />
                    <Route path={'/sign-up'} element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </Provider>
        </>
    )
}