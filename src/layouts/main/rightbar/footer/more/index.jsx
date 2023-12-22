import {Popover, Transition} from "@headlessui/react";
import {Link} from "react-router-dom";

export default function More() {
    const items = [
        {title: "Hakkında", url: "https://about.twitter.com"},
        {title: "X uygulamasını indir", url: "https://help.twitter.com/using-x/download-the-x-app"},
        {title: "Durum", url: "https://status.twitterstat.us"},
        {title: "İşletmeler İçin X", url: "https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"},
        {title: "Geliştiriciler", url: "https://developer.twitter.com"}
    ];
    return (
        <Popover className="relative">
            <Popover.Button
                className="outline-none my-0.5 pr-3 text-[#71767b] text-[13px] font-normal leading-4 hover:underline flex items-center">
                Daha fazla
                <svg viewBox="0 0 24 24" width={17} height={13} className="px-0.5">
                    <path
                        fill="#71767b"
                        d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
            </Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                className="absolute bottom-0 right-0 shadow-box rounded-xl w-[300px] bg-black max-w-[178.5px]"
            >
                <Popover.Panel>
                    {
                        items.map((item, index) => (
                            <Link to={item.url} key={index} className="block py-3 px-4 rounded-t-xl font-bold leading-5 hover:bg-[#eff3f41a] hover:cursor-pointer">{item.title}</Link>
                        ))
                    }
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}