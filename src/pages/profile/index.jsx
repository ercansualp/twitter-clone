import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {userAccount} from "~/store/auth/hooks.js";

export default function Profile() {
    const {username} = useParams();
    const currentAccount = userAccount();
    return (
        <>
            <Helmet>
                <title>{currentAccount.fullName} (@{currentAccount.username}) / X</title>
            </Helmet>
            Profile Page
        </>
    )
}