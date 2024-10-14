import { Link, Outlet } from "react-router-dom";

function Layout()
{
    return (
        <>
        <nav>
            <ul>
                <li >
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
        
        <Outlet />
        <footer>
            <p> 2024 Luxury Hotel. All Rights Reserved.</p>
        </footer>
        </>
    );
};

export default Layout;