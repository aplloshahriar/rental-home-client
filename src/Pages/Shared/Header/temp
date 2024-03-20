import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-10 text-white bg-black">
                <div className="flex-1">
                    <a className="btn btn-ghost text-5xl">NESTIFY</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"> Home </Link></li>
                        <li>
                            <details>
                                <summary>
                                    About Us
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>BLOG</a></li>
                                    <li><a>FAQ </a></li>

                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <Link to="/listing">Listing</Link>
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>BLOG</a></li>
                                    <li><a>FAQ </a></li>

                                </ul>
                            </details>
                        </li>
                        <li><a>Contact us  </a></li>
                        <li><a> Login </a></li>
                        <li><a>  Register </a></li>
                    </ul>
                    <button className="btn btn-error text-white">Become Host</button>
                </div>
            </div>
        </div>
    );
};

export default Header;