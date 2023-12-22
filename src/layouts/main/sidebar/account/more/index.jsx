import {accounts, userAccount} from "~/store/auth/hooks.js";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import MoreItem from "~/layouts/main/sidebar/menu/more/more-item/index.jsx";
import Verified from "~/components/verified/index.jsx";

export default function More() {
    const currentAccount = userAccount();

    return (
        <>
            <div>
                {
                    accounts().map((account, index) => (
                        <div key={index} className="group">
                            <div
                                className={classNames("my-3 h-[65.063px] p-3",{
                                    "group-hover:bg-[#eff3f41a] transition-colors hover:cursor-pointer": account.id !== currentAccount.id
                                })}>
                                <div className="group w-full h-full">
                                    <div className=" w-full h-full flex items-center">
                                        <img src={account.avatar} alt="Profil fotoğrafı"
                                             className="rounded-full w-10 h-10"/>
                                        <div className="flex flex-col mx-3">
                                            <div className="font-bold max-w-[199px] text-ellipsis overflow-hidden whitespace-nowrap flex items-center">
                                                {account.fullName}
                                                {
                                                    account.verified ? (
                                                        <Verified />
                                                    ) : ""
                                                }
                                            </div>
                                            <div className="text-[#71767b] max-w-[199px] font-normal text-ellipsis overflow-hidden whitespace-nowrap">@{account.username}</div>
                                        </div>
                                        {
                                            currentAccount.id === account.id && (
                                                <div className="ml-auto">
                                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                                        <path
                                                            fill="#00ba7c"
                                                            d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"/>
                                                    </svg>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="my-3 h-[1px] bg-[#2f3336]" />
            <div>
                <NavLink to="/i/flow/login" className="group"><MoreItem title="Var olan bir hesap ekle"/></NavLink>
                {accounts().length !== 1 && <NavLink to="/account/switch" className="group"><MoreItem title="Hesapları yönet"/></NavLink>}
                <NavLink to="/logout" className="group"><MoreItem
                    title={`@${currentAccount.username} hesabından çıkış yap`}/></NavLink>
            </div>
        </>
    )
}