import { Outlet } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';


function LayoutWithNavbar() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default LayoutWithNavbar;