import SideNav from "./SideNav";
import Viewport from "./Viewport";

function Layout({children, title}) {
    return (
        <div className="AdminLayout">
            <SideNav/>
            <Viewport title={title}>
                {children}
            </Viewport>
        </div>
    )
}

export default Layout
