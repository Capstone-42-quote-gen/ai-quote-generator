import {AppDispatch} from "../../store/store.ts";
import {useDispatch} from "react-redux";
import {ServerResponse} from "../../store/apis.ts";
import {AxiosResponse} from "axios";


export const SignOutButton = () => {
    const dispatch: AppDispatch = useDispatch()
    const signOut = () => {
        httpsConfig.get('/apis/sign-out/').then((reply:AxiosResponse<ServerResponse>))

        if (reply.status === 200) {
            window.localStorage.removeItem('authorization')
            dispatch(getAuth(null))
            window.location.href = "/"
        }
    }}
}

return(
    <>
        <div className="dropdown-item sign-out-dropdown">
            <button btn btn={outline-dark}>

            </button>
        </div>

    </>
)