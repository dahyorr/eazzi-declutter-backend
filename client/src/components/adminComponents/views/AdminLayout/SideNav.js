import {withRouter, Link} from 'react-router-dom';
import { MdDashboard, MdPeople } from 'react-icons/md';
import { FaPowerOff, FaList, FaProjectDiagram } from 'react-icons/fa';

const SideNav = ({location: {pathname}}) => {

    return (
        <div className='SideNav flex'>
            <div className="content flex">
                <div className="logo">
                    <p>
                        <span className="text-primary">Eazzi</span>
                        <span className="text-secondary">Declutter</span>
                    </p>
                </div>

                <nav className="nav">
                    <Link to='/admin' className={`nav-item ${pathname=== '/admin' ?'active':''}`}>
                        <MdDashboard className='icon'/> <p>Dashboard</p>
                    </Link>

                    <Link to='/admin/user/manage' className={`nav-item ${pathname=== '/admin/user/manage' ?'active':''}`}>
                        <MdPeople className='icon'/> <p>User Management</p>
                    </Link>

                    <Link to='/admin/requests' className={`nav-item ${pathname.split('/')[2]=== 'requests' ?'active':''}`}>
                        <FaList className='icon'/> <p>Manage Requests</p>
                    </Link>

                    <Link to='/admin/products' className={`nav-item ${pathname.split('/')[2]=== 'products' ?'active':''}`}>
                    <FaProjectDiagram className='icon'/> <p>Manage Products</p>
                    </Link>

                    <Link to='/admin/orders' className={`nav-item ${pathname.split('/')[2]=== 'orders' ?'active':''}`}>
                    <FaList className='icon'/> <p>Manage Orders</p>
                    </Link>

                    {/* <Link to='/admin/edit/products' className={`nav-item ${pathname=== '/admin/edit/products' ?'active':''}`}>
                        <FaServicestack className='icon'/> <p>Update Products</p>
                    </Link> */}
                </nav>

                <div className="logout flex">
                    {/* <button className='logout-button'> <FaPowerOff className='icon'/> Logout</button> */}
                    <Link to='/admin/login' className='logout-button'> <FaPowerOff className='icon'/> Logout</Link>
                    <Link to='/admin/login' className='nav-item'> <FaPowerOff className='icon'/> <p>Logout</p></Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SideNav)
