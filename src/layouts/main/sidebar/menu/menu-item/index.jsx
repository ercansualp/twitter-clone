import classNames from "classnames";

export default function MenuItem(props) {
    const {title, icon, isActive, notification} = props;

    return (
        <div className={classNames("p-3 inline-flex items-center rounded-full group-hover:bg-[#eff3f41a] transition-colors", {
            "font-bold": isActive
        })}>
            {
                icon && (
                    <div className="w-[26.25px] h-[26.25px] relative flex items-center">
                        {notification && <div className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{notification}</div>}
                        {icon}
                    </div>
                )
            }
            <span className={classNames("mr-4", {"ml-4": icon})}>{title}</span>
        </div>
    )
}