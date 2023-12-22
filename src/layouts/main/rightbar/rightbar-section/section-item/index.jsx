import {Link} from "react-router-dom";

export default function SectionItem({ children, path }) {
    return (
        <Link to={path} className="flex py-3 px-4 justify-between hover:cursor-pointer hover:bg-[#1D1F23] transition-colors">
            {children}
        </Link>
    )
}