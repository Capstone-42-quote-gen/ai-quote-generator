import {AppDispatch} from "../../store/store.ts";
import {useDispatch} from "react-redux";
import {ServerResponse} from "../../store/apis.ts";
import {AxiosResponse} from "axios";
import {getAuth} from "../../store/auth";
import {httpConfig} from "../utils/http-config";
import {Button, Image} from "react-bootstrap";
import signOutIcon from "../../assets/sign-out.png";
import {useJwtToken} from "../hooks/useJwtHook.tsx";



export const SignOutButton = () => {
    const { profile } = useJwtToken();
    const profileEmail = profile?.profileEmail ?? "";
    const dispatch: AppDispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then((reply: AxiosResponse<ServerResponse>) => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                window.location.href = "/"
            }
        })
    }

    return (
        <>
            <div className="dropdown-item sign-out-dropdown text-center">

                <Button className={"post-vote-btn"} onClick={signOut}><h5>Sign Out</h5>{profileEmail}<br/><Image src={signOutIcon} /></Button>
            </div>

        </>
    )
}