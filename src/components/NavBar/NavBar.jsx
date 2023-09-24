import { NavLink } from "react-router-dom";
import logo from '../../../public/Logo.png'

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-6 shadow-md px-5">

                <img className="h-[50px]" src={logo} alt="" />

                <ul className="flex gap-5 text-[18px]">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Home

                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
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