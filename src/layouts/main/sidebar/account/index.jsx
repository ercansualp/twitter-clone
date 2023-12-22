import {Popover, Transition} from "@headlessui/react";
import {userAccount} from "~/store/auth/hooks.js";
import More from "~/layouts/main/sidebar/account/more/index.jsx";
import Avatar from "~/components/avatar/index.jsx";
import Verified from "~/components/verified/index.jsx";

export default function Account() {
    const account = userAccount();

    return (
        <Popover className="mt-auto relative">
            <Popover.Button className="group w-full outline-none">
                <div
                    className="my-3 h-[65.063px] p-3 group-hover:bg-[#eff3f41a] hover:cursor-pointer rounded-full transition-colors">
                    <div className=" w-full h-full flex items-center">
                        <Avatar avatar={account.avatar} />
                        <div className="flex flex-col mx-3 items-start">
                            <div className="font-bold flex items-center">
                                {account.fullName}
                                {
                                    account.verified ? (
                                        <Verified />
                                    ) : ""
                                }
                            </div>
                            <div className="text-[#71767b] font-normal">@{account.username}</div>
                        </div>
                        <div className="ml-auto">
                            <svg viewBox="0 0 24 24" width="1.25em" height="1.25em">
                                <path
                                    fill="#e7e9ea"
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className="py-3 absolute bottom-full left-1/2 -translate-x-1/2 shadow-box rounded-2xl w-[300px] bg-black"
            >
                <Popover.Panel>
                    <More />
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}