import Search from "~/layouts/main/rightbar/search/index.jsx";
import Agenda from "~/layouts/main/rightbar/agenda/index.jsx";
import Premium from "~/layouts/main/rightbar/premium/index.jsx";
import RightbarSection from "~/layouts/main/rightbar/rightbar-section/index.jsx";
import WhoToFollow from "~/layouts/main/rightbar/who-to-follow/index.jsx";
import {userAccount} from "~/store/auth/hooks.js";
import Footer from "~/layouts/main/rightbar/footer/index.jsx";
import {useLocation} from "react-router-dom";
import classNames from "classnames";

export default function Rightbar() {
    const account = userAccount();
    const {pathname} = useLocation();
    const showComponents = {
        search: ["/", "/notifications", `/${account.username}/lists`, "/i/bookmarks", `/${account.username}/communities`, `/${account.username}`],
        premium: ["/"],
        whoToFollow: ["*"],
        agenda: ["/", "/notifications", `/${account.username}/lists`, "/i/bookmarks", `/${account.username}/communities`, `/${account.username}`],
        footer: ["*"]
    };

    return (
        <aside className={classNames("w-[350px] mr-[70px]", {
            "pt-3": pathname === "/explore",
            "pb-16": pathname === "/explore" || pathname === "/"
        })}>
            {
                pathname === "/messages" ? "" : (
                    <>
                        {showComponents.search.find(path => path === pathname || path === "*" || path.includes("/lists")) ? <Search/> : ""}
                        {
                            showComponents.premium.find(path => path === pathname || path === "*") ? (
                                <RightbarSection title="Premium'a Abone Ol" moreUrl="" moreVisible={false}>
                                    <Premium/>
                                </RightbarSection>
                            ) : ""
                        }
                        {
                            showComponents.whoToFollow.find(path => path === pathname || path === "*") ? (
                                <RightbarSection title="Kimi takip etmeli"
                                                 moreUrl={`i/connect_people?user_id=${account.id}`}
                                                 moreVisible={true}>
                                    <WhoToFollow/>
                                </RightbarSection>
                            ) : ""
                        }
                        {
                            showComponents.agenda.find(path => path === pathname || path === "*" || path.includes("/lists")) ? (
                                <RightbarSection title="Türkiye gündemleri" moreUrl="/i/trends" moreVisible={true}>
                                    <Agenda/>
                                </RightbarSection>
                            ) : ""
                        }
                        {showComponents.footer.find(path => path === pathname || path === "*") ? <Footer/> : ""}
                    </>
                )
            }
        </aside>
    )
}