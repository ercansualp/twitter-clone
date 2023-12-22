import ErcanAvatar from "~/assets/img/AhAh3xlU_400x400.png";
import FollowButton from "~/components/follow-button/index.jsx";
import {Link} from "react-router-dom";
import classNames from "classnames";
import UserFullName from "~/components/user-full-name/index.jsx";
import UserUsername from "~/components/user-username/index.jsx";
import {numberFormat} from "~/utils/formats.js";
import Avatar from "~/components/avatar/index.jsx";
import Verified from "~/components/verified/index.jsx";

export default function UserPreview({top, left, show, user}) {
    const followers = ["emre", "hasan", ""];
    return (
        <div
            className={classNames("z-10 w-[300px] min-h-[209.53px] delay-75 transition-all shadow-box absolute bg-black rounded-2xl p-4", {
                "opacity-0": !show,
                "cursor-default": show,
                "invisible": !show,
                "block": show,
                "none": !show
            })} style={{top, left}}>
            <div className="flex justify-between items-start">
                <Link to={`/${user.username}`}
                      className="hover:opacity-90 transition-all rounded-full w-[64px] h-[64px] bg-contain"
                      style={{backgroundImage: `url(${user.avatar})`}}/>
                <FollowButton/>
            </div>
            <div className="mt-2 flex flex-col">
                <Link to={`/${user.username}`} className="hover:underline flex items-center">
                    <UserFullName fullName={user.fullName}/>
                    {user.verified ? <Verified /> : ""}
                </Link>
                <div className="inline-flex">
                    <Link to={`/${user.username}`}><UserUsername username={user.username}/></Link>
                </div>
            </div>
            <div className="mt-3">{user.biography}</div>
            <div className="mt-3 flex gap-5 items-center">
                <Link to={`/${user.username}/following`} className="gap-[3.39px] flex items-center hover:underline">
                    <div className="font-bold leading-4 text-sm">{numberFormat(user.followedCount)}</div>
                    <div className="leading-4 font-normal text-sm text-[#71767b]">Takip Edilen</div>
                </Link>
                {/* fw:400, lh: 16, fs: 14, color: rgb(113, 118, 123) */}
                <Link to={`/${user.username}/verified_followers`} className="gap-[3.39px] flex items-center hover:underline">
                    <div className="font-bold leading-4 text-sm">{numberFormat(user.followerCount)}</div>
                    <div className="leading-4 font-normal text-sm text-[#71767b]">Takipçi</div>
                </Link>
            </div>
            <Link to={`/${user.username}/followers_you_follow`} className="mt-3 flex items-center hover:underline">
                <div className={classNames("flex relative justify-start", {
                    "w-[45px]": followers.length >= 3,
                    "w-[27px]": followers.length === 2,
                    "w-[18px]": followers.length === 1
                })}>
                    {
                        followers.map((follower, index) => {
                            if (index <= 2) {
                                return (
                                    <span key={index} className={classNames("", {
                                        "absolute": index === 1 || index === 2,
                                        "z-30": index === 0,
                                        "z-20": index === 1,
                                        "z-10": index === 2,
                                        "left-[9px]": index === 1,
                                        "left-[18px]": index === 2,
                                        "w-[18px] h-[18px]": index === 1 || index === 2,
                                    })}><Avatar width={18} height={18} avatar={ErcanAvatar}/></span>
                                )
                            }
                        })
                    }
                </div>
                <div className={classNames("leading-4 text-[13px] font-normal text-[#71767b]", {"ml-6": followers.length >= 3, "ml-3": followers.length < 3})}>
                    {
                        followers.length === 1 ? `${followers[0]} tarafından takip ediliyor` :
                        followers.length === 2 ? `${followers[0]} ve ${followers[1]} tarafından takip ediliyor` :
                        `${followers[0]}, ${followers[1]} ve takip ettiğin diğer ${followers.length-2} kişi tarafından takip ediliyor`
                    }
                </div>
            </Link>
        </div>
    )
}