import PropTypes from "prop-types";
import {defaultAvatar} from "~/assets/img";

export default function Avatar({avatar, width, height}) {
    return (
        <img src={avatar} alt="Profil fotoğrafı" className="rounded-full group-hover:bg-[#1a1a1a26]" width={width}
             height={height}/>
    )
}

Avatar.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    avatar: PropTypes.string
}

Avatar.defaultProps = {
    width: 40,
    height: 40,
    avatar: defaultAvatar
}