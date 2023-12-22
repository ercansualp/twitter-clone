import {Link} from "react-router-dom";
import More from "./more/index.jsx";

export default function Footer() {
    const items = [
        {path: "/tos", title: "Hizmet Şartları"},
        {path: "/privacy", title: "Gizlilik Politikası"},
        {path: "https://support.twitter.com/articles/20170514", title: "Çerez Politikası"},
        {path: "https://help.twitter.com/resources/accessibility", title: "Erişilebilirlik"},
        {path: "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo", title: "Reklam bilgisi"}
    ];

    return (
        <div className="mb-4">
            <div className="px-4 flex-wrap flex flex-row">
                {
                    items.map((item, index) => (
                        <Link key={index} to={item.path} className="my-0.5 pr-3 text-[#71767b] text-[13px] font-normal leading-4 hover:underline">{item.title}</Link>
                    ))
                }
                <More />
                <span className="my-0.5 pr-3 text-[#71767b] text-[13px] font-normal leading-4">
                    © 2023 X Corp.
                </span>
            </div>
        </div>
    )
}