import {userAccount} from "~/store/auth/hooks.js";
import {Helmet} from "react-helmet";

export default function Lists() {
    const currentAccount = userAccount();

    return (
        <>
            <Helmet>
                <title>@{currentAccount.username} tarafından oluşturulan Listeler / X</title>
            </Helmet>
            Lists Page
        </>
    )
}