import {Popover} from "@headlessui/react";
import {numberFormat} from "~/utils/formats.js";

export default function AgendaItem({ categoryName, postCount, tagName }) {
    return (
        <>
            <div className="inline-flex flex-col">
                <div className="text-[#71767b] font-normal text-[13px] leading-4">{categoryName}</div>
                <div className="font-bold mt-0.5 leading-5">{tagName}</div>
                <div className="text-[#71767b] font-normal text-[13px] mt-1 leading-4">{numberFormat(postCount)} gönderi</div>
            </div>
            <Popover className="relative">
                <Popover.Button className="flex justify-center items-center ml-5 w-[34.75px] h-[34.75px] hover:bg-[#1D2C37] transition-colors rounded-full group outline-none">
                    <svg width={18.75} height={18.75} className="group-hover:text-[#1D9BF0]" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                    </svg>
                </Popover.Button>
                <Popover.Panel className="top-0 right-0 absolute rounded-xl shadow-box bg-black max-w[calc(384px)] w-[381.22px] z-10">
                    <div className="py-3 px-4 font-bold	leading-5 w-full flex items-center">
                        <svg width={18.75} height={18.75} viewBox="0 0 24 24" className="mr-3"><path fill="#e7e9ea" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" /></svg>
                        <span>İlgimi çekmiyor</span>
                    </div>
                    <div className="py-3 px-4 font-bold	leading-5 w-full flex items-center">
                        <svg width={18.75} height={18.75} viewBox="0 0 24 24" className="mr-3"><path fill="#e7e9ea" d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" /></svg>
                        <span>Bu gündem başlığı zararlı veya spam içeriyor</span>
                    </div>
                </Popover.Panel>
            </Popover>
        </>
    )
}