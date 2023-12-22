import {useSelector} from "react-redux";

export const userAccount = () => useSelector(state => state.auth.currentAccount);
export const accounts = () => useSelector(state => state.auth.accounts);
