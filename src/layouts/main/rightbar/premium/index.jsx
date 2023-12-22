import Button from "~/components/button/index.jsx";
import {NavLink} from "react-router-dom";

export default function Premium() {
    return (
        <div className="py-3 !pt-0 px-4">
            <div className="mb-2.5 font-normal leading-5">
                Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
            </div>
            <NavLink to="/i/verified-choose">
                <Button size="normal">Abone ol</Button>
            </NavLink>
        </div>
    )
}