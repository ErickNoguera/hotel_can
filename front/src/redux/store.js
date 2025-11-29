import { configureStore } from "@reduxjs/toolkit"; 
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        //*Vale por el slice
        actualUser: userSlice,
    },
});

export default store;