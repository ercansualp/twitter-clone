import MenuItem from "~/layouts/main/sidebar/menu/menu-item/index.jsx";
import {NavLink} from "react-router-dom";
import {mainMenu} from "~/utils/consts.jsx";
import More from "~/layouts/main/sidebar/menu/more/index.jsx";
import New from "~/layouts/main/sidebar/menu/new/index.jsx";

export default function Menu() {
    return (
        <div className="mt-0.5 mb-1 text-xl flex flex-col">
            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} key={index} className="py-1 group">
                    {({isActive}) => (
                        <MenuItem isActive={isActive} title={menu.title} notification={menu.notification || null}
                                  icon={isActive ? menu.icon.active : menu.icon.passive}/>
                    )}
                </NavLink>
            ))}
            <More />
            <New />
        </div>
    )
}