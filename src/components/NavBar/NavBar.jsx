import { NavLink } from "react-router-dom";
import logo from '../../../public/Logo.png'

const NavBar = () => {
    return (
        <div className="max-w-[1320px] mx-auto">
            <nav className="flex justify-between items-center py-6  px-5">

                <img className="h-[35px] md:h-[50px]" src={logo} alt="" />

                <ul className="flex gap-5 text-[14px] md:text-[18px]">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""}>
                            Home
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>
                            Donation
                        </NavLink>


                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>


                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default NavBar;