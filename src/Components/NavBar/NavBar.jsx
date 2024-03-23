import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { path: "/home", name: "Home", id: "1" }, 
        { path: "/about", name: "About", id: "2" }, 
        { path: "/products", name: "Products", id: "3" }, 
        { path: "/contact", name: "Contact", id: "4" }, 
        { path: "/dashboard", name: "Dashboard", id: "5" }];

    return (
        <nav className="text-black bg-yellow-400 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdClose></MdClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                }
                
            </div>
            
            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-16' : '-top-60'} bg-yellow-400 px-6`}>
            {
                routes.map(rout => <Link key={rout.id} rout={rout}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;