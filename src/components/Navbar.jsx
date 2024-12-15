import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Navbar = () => {


    const {user , userSingOut} = useContext(AuthContext)

    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/all_jobs'}>All Jobs</Link></li>
        <li><Link to={'/jobs_post'}> Jobs Post</Link></li>
        <li><Link to={'/my_jobs'}>My Jobs</Link></li>
        <li><Link to={'/my_application'}>My Application</Link></li>
    </>

    const handleSingOut = () =>{
        userSingOut()
    }
    return (
        <div className="">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Job Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?<div className="flex gap-3 items-center">
                        <p>{user.displayName}</p>
                        <button onClick={handleSingOut} className="btn">LogOut</button>
                    </div>:<Link to={'/login'} className="btn">Log In</Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
