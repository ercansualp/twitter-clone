import classNames from "classnames";
import {useState} from "react";

export default function FollowButton() {
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = (event) => {
        event.preventDefault();
        setIsFollowed(!isFollowed);
    }

    return (
        <button
            onClick={handleFollow}
            onMouseOver={(e) => isFollowed ? e.target.textContent = "Takibi bırak" : "Takip ediliyor"}
            onMouseLeave={e => isFollowed ? e.target.textContent = "Takip ediliyor" : "Takibi bırak"}
            className={classNames("flex items-center justify-center rounded-full px-4 h-[30px] font-bold leading-4 text-sm", {
                "hover:bg-[#d7dbdc] bg-[#eff3f4] text-black transition-colors": !isFollowed,
                "hover:bg-[#f4212e1a] bg-[#16181c] hover:text-[#f4212f] text-[#eff3f4] border border-[#536471] w-[125px]": isFollowed
            })}
        >
            {isFollowed ? "Takip ediliyor" : "Takip et"}
        </button>
    )
}

/*

// Takip et butonu
<button onClick={onClick || null} className="flex items-center justify-center bg-[#eff3f4] hover:bg-[#d7dbdc] transition-colors rounded-full px-4 h-[30px] text-black font-bold leading-4 text-sm">Takip et</button>


// Takip ediliyor butonu


 */