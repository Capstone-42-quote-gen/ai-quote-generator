import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {Profile} from "./Profile";
import {Provider} from "react-redux";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import {CreateQuotePage} from "../shared/components/createquote/CreateQuotePage";
import {SignIn} from "../shared/components/SignIn/SignIn";
import {SignUp} from "../shared/components/signup/SignUp";
import {DisplayQuote} from "../shared/components/createquote/DisplayQuote";
import {DisplayByNew} from "../shared/components/navbar-functions/New";
import {PrivateRoute} from "../shared/components/RouteGuard";




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
                    <Route path={'/create-quote'} element={
                        <PrivateRoute><CreateQuotePage/></PrivateRoute>} />
                    <Route path={'/display-quote/:postId'} element={<DisplayQuote />} />
                    <Route path={'/profile'} element={
                        <PrivateRoute><Profile/></PrivateRoute>
                        } />
                    <Route path={'/sign-in'} element={<SignIn />} />
                    <Route path={'/sign-up'} element={<SignUp />} />
                    <Route path={'/new'} element={<DisplayByNew />} />
                </Routes>
            </BrowserRouter>
        </Provider>
        </>
    )
}