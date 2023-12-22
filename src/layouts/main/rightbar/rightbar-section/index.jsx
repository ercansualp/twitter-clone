import {NavLink} from "react-router-dom";

export default function RightbarSection({title, children, moreUrl, moreVisible}) {
    return (
        <div className="border border-[#16181c] rounded-2xl bg-[#16181c] mb-4">
            <div className="py-3 px-4 font-extrabold text-xl text-[#e7e9ea]">
                {title}
            </div>
            {children}
            {moreVisible && <NavLink to={moreUrl}
                                     className="block rounded-b-2xl text-[#1d9bf0] font-normal leading-5 p-4 hover:cursor-pointer hover:bg-[#1D1F23] transition-colors">Daha
                fazla göster</NavLink>}
        </div>
    )
}