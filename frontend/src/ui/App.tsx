import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
// import {Profile} from "./Profile";
import {Provider} from "react-redux";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import {CreateQuotePage} from "../shared/components/createquote/CreateQuotePage";
import {SignIn} from "../shared/components/SignIn/SignIn";
import {SignUp} from "../shared/components/signup/SignUp";
import {DisplayQuote} from "../shared/components/createquote/DisplayQuote";
import {DisplayByNew} from "../shared/components/navbar-functions/New";
import {DisplayTags} from "../shared/components/navbar-functions/Tags.tsx";
import {PrivateRoute} from "../shared/components/RouteGuard";
import {DisplayByPopular} from "../shared/components/navbar-functions/Popular";
import {Profile} from "./Profile";


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
                    <Route path={'/tags/:promptId'} element={<DisplayTags />} />
                    {/*<Route path={'/profile'} element={<Profile />} />*/}
                    <Route path={'/sign-in'} element={<SignIn />} />
                    <Route path={'/sign-up'} element={<SignUp />} />
                    <Route path={'/new'} element={<DisplayByNew />} />
                    <Route path={'/popular'} element={<DisplayByPopular />} />
                </Routes>
            </BrowserRouter>
        </Provider>
        </>
    )
}