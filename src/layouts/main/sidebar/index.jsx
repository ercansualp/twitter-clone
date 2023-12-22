import Logo from "~/layouts/main/sidebar/logo/index.jsx";
import Menu from "~/layouts/main/sidebar/menu/index.jsx";
import Account from "~/layouts/main/sidebar/account/index.jsx";
import {userAccount} from "~/store/auth/hooks.js";

export default function Sidebar() {
    return (
        <aside className="w-[275px] px-2 flex flex-col h-screen sticky top-0 overflow-y-auto overflow-x-hidden">
            <Logo />
            <Menu />
            {userAccount() && <Account />}
        </aside>
    )
}