import SectionItem from "~/layouts/main/rightbar/rightbar-section/section-item/index.jsx";
import {useState} from "react";
import UserPreview from "~/layouts/main/rightbar/who-to-follow/user-preview/index.jsx";
import FollowButton from "~/components/follow-button/index.jsx";
import UserFullName from "~/components/user-full-name/index.jsx";
import UserUsername from "~/components/user-username/index.jsx";
import {whoToFollowUsers} from "~/mock/index.js";
import Verified from "~/components/verified/index.jsx";
import {Link} from "react-router-dom";

export default function WhoToFollow() {
    const [userPreviewPosition, setUserPreviewPosition] = useState({top: 0, left: 0});
    const [showUserPreview, setShowUserPreview] = useState(false);
    const [previewUser, setPreviewUser] = useState();

    const handleShowUserPreview = (top, left, user) => {
        setPreviewUser(user);
        setUserPreviewPosition({top, left});
        setShowUserPreview(true);
    }

    const handleHiddenUserPreview = () => setShowUserPreview(false);

    return (
        <>
            {
                whoToFollowUsers.map((user, index) => (
                    <SectionItem key={index} path={user.username} type="div">
                        <div className="flex items-center justify-between w-full cursor-pointer">
                            <div className="flex items-center relative" onMouseLeave={handleHiddenUserPreview}>
                                <Link to={`/${user.username}`}>
                                    <div onMouseOver={() => handleShowUserPreview(40, -131.25, user)}
                                         className="hover:opacity-90 transition-all rounded-full w-[40px] h-[40px] bg-contain mr-3"
                                         style={{backgroundImage: `url(${user.avatar})`}}/>
                                </Link>
                                <div>
                                    <div className="flex items-center"
                                         onMouseOver={() => handleShowUserPreview(31.25, -46.5705, user)}>
                                        <Link to={`/${user.username}`}><UserFullName fullName={user.fullName}/></Link>
                                        {
                                            user.verified ? (
                                                <Verified/>
                                            ) : ""
                                        }
                                    </div>
                                    <span onMouseOver={() => handleShowUserPreview(40, -46.5705, user)}>
                                <Link to={`/${user.username}`}><UserUsername username={user.username}/></Link>
                            </span>
                                </div>
                                {previewUser && previewUser === user &&
                                    <UserPreview top={userPreviewPosition.top} left={userPreviewPosition.left}
                                                 show={showUserPreview} user={previewUser}/>}
                            </div>
                            <div className="flex items-center">
                                <FollowButton />
                            </div>
                        </div>
                    </SectionItem>
                ))
            }
        </>
    )
}