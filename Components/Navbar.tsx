import { NavbarUtils } from "@/Utils/NavUtils"
import Link from "next/link"


export default function Navbar() {
    return (
        <nav>
            {NavbarUtils.map((util, index) => {
                return (
                    <Link key={index} className="nav--link" href={`${util.type === "category" && util.name !== "New" ? "/" + util.name : ""}`}  >
                        {util.name == "New" ? "Home" : util.name}
                        {util.icon}
                    </Link>
                )
            })}
        </nav >
    )
}