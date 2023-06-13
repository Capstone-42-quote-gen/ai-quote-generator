import {useJwtToken} from "../hooks/useJwtHook.tsx";
import React from "react";
import {Navigate, useLocation} from "react-router-dom";


interface PrivateRouteProps {
    children: React.ReactNode
}
export function PrivateRoute (props: PrivateRouteProps) {

    const { children } = props
    const { profile, isLoading } = useJwtToken()

    if ( isLoading ) {
        return <IsLoading/>
    } else if ( profile === null ) {
        return <HandleRedirect />
    }
    return children
}

export function HandleRedirect() {
    let location = useLocation()
    return (
        <>
           <Navigate to="/sign-in" state={{ from: location}} replace/>
        </>
    )
}

export function IsLoading() {
    return (
        <>
            <h1>Page is still loading</h1>
        </>
    )
}