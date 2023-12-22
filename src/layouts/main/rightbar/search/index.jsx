import {useState, useRef} from "react";
import {useClickAway} from "react-use";

export default function Search() {
    const [value, setValue] = useState("");
    const [svgColor, setSvgColor] = useState("#71767b");
    const [focus, setFocus] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchUsers, setSearchUsers] = useState([]);
    const ref= useRef();

    const focusSearchInput = () => {
        setFocus(true);
        setSvgColor("#1d9cf0");
    }

    useClickAway(ref, () => {
        setFocus(false);
    });

    return (
        <div className="mb-3 h-[53px] flex items-center bg-black sticky top-0 z-50">
            <div className="relative group" onFocus={focusSearchInput} onBlur={() => setSvgColor("#71767b")} ref={ref}>
                <div className="absolute flex justify-center items-center w-[46px] h-[44px] left-0 top-0">
                    <svg viewBox="0 0 24 24" width={32} height={18.75}>
                        <path
                            fill={svgColor}
                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
                    </svg>
                </div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="Ara"
                    className="placeholder-[#757575] pl-[56px] pr-[46px] focus:border-[#1d9cf0] outline-none focus:border w-[350px] h-[44px] rounded-full bg-[#202327]"
                />
                {
                    value && (
                        <div className="absolute flex justify-center items-center w-[46px] h-[44px] right-0 top-0" onClick={() => setValue("")}>
                            <div className="p-[5px] bg-[#1d9bf0] rounded-full cursor-pointer">
                                <svg viewBox="0 0 15 15" width={10} height={10}>
                                    <path
                                        d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"/>
                                </svg>
                            </div>
                        </div>
                    )
                }
                {
                    focus && (
                        <div className="z-10 searchBox absolute top-full bg-black rounded-lg shadow-box w-full max-h-[calc(80vh-53px)] overflow-y-auto overflow-x-hidden">
                            {
                                users.length === 0 && !value ? (
                                    <div className="px-3 pt-5 pb-8 text-center font-normal text-[#71767b] leading-5">
                                        Kişileri, listeleri veya anahtar kelimeleri aramayı dene
                                    </div>
                                ) : value ? (
                                    <>
                                        <div className="py-3 px-4 flex items-center min-h-[64px] hover:cursor-pointer transition-colors hover:bg-[#eff3f41a] font-bold">
                                            <div className="mr-3 flex items-center justify-center w-10 h-10">
                                                <svg width={20} height={20} viewBox="0 0 21 21"><path fill="#e7e9ea" d="M9.094 3.095c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.97-.001-8.999-4.03-9-9z" /></svg>
                                            </div>
                                            <div className="leading-5 break-all">#abc730</div>
                                        </div>
                                        <div className="py-3 px-4 flex items-center min-h-[64px] hover:cursor-pointer transition-colors hover:bg-[#eff3f41a] font-bold">
                                            <div className="mr-3 flex items-center justify-center w-10 h-10">
                                                <svg width={20} height={20} viewBox="0 0 21 21"><path fill="#e7e9ea" d="M9.094 3.095c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.97-.001-8.999-4.03-9-9z" /></svg>
                                            </div>
                                            <div className="leading-5 break-all">#abc730</div>
                                        </div>
                                        <div className="py-3 px-4 flex items-center min-h-[64px] hover:cursor-pointer transition-colors hover:bg-[#eff3f41a] font-bold">
                                            <div className="mr-3 flex items-center justify-center w-10 h-10">
                                                <svg width={20} height={20} viewBox="0 0 21 21"><path fill="#e7e9ea" d="M9.094 3.095c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.97-.001-8.999-4.03-9-9z" /></svg>
                                            </div>
                                            <div className="leading-5 break-all">#abc730</div>
                                        </div>
                                        <div className="my-1 h-[1px] bg-[#2f3336]" />
                                        {
                                            users.map((user, index) => (
                                                <div key={index} className="py-3 px-4 flex items-center hover:bg-[#eff3f41a] cursor-pointer transition-colors">
                                                    <img className="w-10 h-10 rounded-full mr-3" src="https://pbs.twimg.com/profile_images/1200814302820753410/AhAh3xlU_400x400.png" alt=""/>
                                                    <div className="flex-col inline-flex">
                                                        <div className="font-bold leading-5 max-w-[250px] overflow-hidden whitespace-nowrap">./prototurk</div>
                                                        <div className="font-normal text-[#71767b] leading-5">@prototurkcom</div>
                                                    </div>
                                                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center ml-auto hover:bg-[#172631] transition-colors">
                                                        <svg width={18} height={18} viewBox="0 0 24 24"><path fill="#1d9bf0" d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" /></svg>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="p-4 h-[52px] hover:bg-[#eff3f41a] cursor-pointer transition-colors">
                                            <div className="leading-5 font-normal break-all">@{value} adlı kullanıcıya git</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <>
                                            <div className="py-3 px-4 flex justify-between font-bold items-center searchBox">
                                                <div className="text-xl searchBox">En yeni</div>
                                                <div className="text-sm text-[#1d9bf0] px-3 rounded-full hover:cursor-pointer transition-all hover:bg-[#031018] searchBox">Tümünü temizle</div>
                                            </div>
                                            {
                                                users.map((user, index) => (
                                                    <div key={index} className="py-3 px-4 flex items-center hover:bg-[#eff3f41a] cursor-pointer transition-colors">
                                                        <img className="w-10 h-10 rounded-full mr-3" src="https://pbs.twimg.com/profile_images/1200814302820753410/AhAh3xlU_400x400.png" alt=""/>
                                                        <div className="flex-col inline-flex">
                                                            <div className="font-bold leading-5 max-w-[250px] overflow-hidden whitespace-nowrap">./prototurk</div>
                                                            <div className="font-normal text-[#71767b] leading-5">@prototurkcom</div>
                                                        </div>
                                                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center ml-auto hover:bg-[#172631] transition-colors">
                                                            <svg width={18} height={18} viewBox="0 0 24 24"><path fill="#1d9bf0" d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" /></svg>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    </>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}