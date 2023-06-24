git import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./ui/App.tsx";
import {store} from "./store/store.ts";

ReactDOM.createRoot(document.getElementById('root') as Element).render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    )