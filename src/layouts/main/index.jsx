import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "./sidebar/index.jsx";
import Rightbar from "~/layouts/main/rightbar/index.jsx";
import Messages from "./messages/index.jsx";
import {userAccount} from "~/store/auth/hooks.js";

export default function MainLayout() {
    const {pathname} = useLocation();
    const account = userAccount();
    const showMessagesComponent = ["/", "/explore", "/notifications", `/${account.username}/lists`, "/i/bookmarks", `/${account.username}/communities`, `/${account.username}`];

    return (
        <div className="w-[1325px] mx-auto flex min-h-screen">
            <Sidebar />
            <main className="gap-[30px] flex flex-1 w-[1050px]">
                <main className="max-w-[600px] flex-1 border-x border-[#2f3336]">
                    <Outlet />
                </main>
                <Rightbar />
            </main>
            {showMessagesComponent.find(path => path === pathname) && (<Messages />)}
        </div>
    )
}