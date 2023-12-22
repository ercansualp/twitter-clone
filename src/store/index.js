import {configureStore} from "@reduxjs/toolkit";
import auth from "~/store/auth/index.js";

const store = configureStore({
    reducer: {
        //stores
        auth
    }
})

export default store;