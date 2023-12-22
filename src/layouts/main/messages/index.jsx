import {useState} from "react";
import classNames from "classnames";

export default function Messages() {
    const [showMessages, setShowMessages] = useState(false);

    const handleClick = (event) => {
        const id = event.target.id;
        if(id !== "view-msgs-btn" && id !== "view-msgs-svg" && id !== "view-msgs-svg-path") {
            setShowMessages(!showMessages);
        }
    }

    return (
        <div className={classNames("bg-black w-[400px] shadow-box fixed bottom-0 right-5 rounded-t-2xl transition-all max-h-[530px]", {
            "h-[80vh]": showMessages,
            "h-[53px]": !showMessages,
        })}>
            <div
                onClick={handleClick}
                className="font-bold leading-6 text-xl text-[#e7e9ea] flex justify-between items-center px-4 h-[53px] cursor-pointer"
            >
                <div>Mesajlar</div>
                <div className="flex items-center">
                    <button id="view-msgs-btn" className="w-9 h-9 flex justify-center items-center border border-black rounded-full hover:bg-[#1D1F23] transition-colors">
                        <svg id="view-msgs-svg" className="w-5 h-5" viewBox="0 0 24 24"><path id="view-msgs-svg-path" fill="#eff3f4" d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" /></svg>
                    </button>
                    <button onClick={handleClick} className="w-9 h-9 flex justify-center items-center border border-black rounded-full hover:bg-[#1D1F23] transition-colors">
                        <svg className={classNames("w-5 h-5", {"-rotate-180": showMessages})} width={20} height={20} viewBox="0 0 24 24"><path fill="#eff3f4" d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z" /></svg>
                    </button>
                </div>
            </div>
            {
                showMessages && (
                    <>

                    </>
                )
            }
        </div>
    )
}