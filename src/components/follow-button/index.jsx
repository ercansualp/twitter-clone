export default function FollowButton({onClick}) {
    return (
        <button onClick={onClick || null} className="flex items-center justify-center bg-[#eff3f4] hover:bg-[#d7dbdc] transition-colors rounded-full px-4 h-[30px] text-black font-bold leading-4 text-sm">Takip et</button>
    )
}