import {createSlice} from "@reduxjs/toolkit";
import AvatarErcan from "../../assets/img/AhAh3xlU_400x400.png";
import AvatarHasan from "../../assets/img/1645220211246.jpeg";

const initialState = {
    currentAccount: {
        id: 1,
        username: "ercansualp",
        fullName: "Ercan SUALP",
        avatar: AvatarErcan,
        email: "ercansualp@outlook.com.tr",
        password: "123456",
        banner: "https://yt3.googleusercontent.com/wbvNKU1qb9-D8UwpLFqx9ieV3wM6qz36qBqa_Tr7GO3WjYl8Y18pYFAd6cqJ_SzohalCUFMwBg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        birthdate: new Date(2000, 6, 6),
        biography: "Temet Nosce",
        verified: 1,
        gender: 1,
        phone: "+90 554 197 57 23"
    },
    accounts: [
        {
            id: 1,
            username: "ercansualp",
            fullName: "Ercan SUALP",
            avatar: AvatarErcan,
            email: "ercansualp@outlook.com.tr",
            password: "123456",
            banner: "https://yt3.googleusercontent.com/wbvNKU1qb9-D8UwpLFqx9ieV3wM6qz36qBqa_Tr7GO3WjYl8Y18pYFAd6cqJ_SzohalCUFMwBg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            birthdate: new Date(2000, 6, 6),
            biography: "Temet Nosce",
            verified: 1,
            gender: 1,
            phone: "+90 554 197 57 23"
        },
        {
            id: 2,
            username: "zuck",
            fullName: "Mark Zuckerberg",
            avatar: "https://pbs.twimg.com/profile_images/1679840073389416450/iltboRXC_400x400.jpg",
            email: "markzuckerberg@outlook.com.tr",
            password: "123456",
            banner: "https://yt3.googleusercontent.com/wbvNKU1qb9-D8UwpLFqx9ieV3wM6qz36qBqa_Tr7GO3WjYl8Y18pYFAd6cqJ_SzohalCUFMwBg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
            birthdate: new Date(2000, 6, 6),
            biography: "",
            verified: 0,
            gender: 1,
            phone: "+90 554 197 57 23"
        }
    ]
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // state verilerini manipüle etme..
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
            if (!state.currentAccount) {
                state.currentAccount = action.payload;
            }
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload);
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false);
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        }
    }
})

export const {_addAccount, _removeAccount, _setCurrentAccount} = auth.actions;
export default auth.reducer;