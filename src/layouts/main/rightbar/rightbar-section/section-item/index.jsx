import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function SectionItem({ children, path, type }) {
    if(type === "link") {
        return (
            <Link to={path} className="flex py-3 px-4 justify-between hover:cursor-pointer hover:bg-[#1D1F23] transition-colors">
                {children}
            </Link>
        )
    }
    return (
        <div className="flex py-3 px-4 justify-between hover:cursor-pointer hover:bg-[#1D1F23] transition-colors">
            {children}
        </div>
    )
}

SectionItem.propTypes = {
    children: PropTypes.node,
    path: PropTypes.string,
    type: PropTypes.string
}

SectionItem.defaultProps = {
    type: "link"
}