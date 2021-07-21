import {Route} from 'react-router-dom'
import AdminLayout from '../adminComponents/views/AdminLayout/Layout';
import Layout from '../Layout';
import Dashboard from "../adminComponents/views/AdminDashboard/Dashboard";
import Products from "../adminComponents/views/AdminProducts/Products";
import ProductsDetail from "../adminComponents/views/AdminProductsDetail/ProductsDetail";
import Login from '../adminComponents/views/AdminLogin/Login';
import ManageRequests from '../adminComponents/views/AdminManageRequests/ManageRequests';
import UserManagement from '../adminComponents/views/AdminUserManagement/UserManagement';
import RequestsDetail from '../adminComponents/views/AdminRequestsDetail/RequestsDetail';
import UpdateProducts from '../adminComponents/views/AdminUpdateProducts/UpdateProducts';
import Error404 from "../views/Error404";

function AdminRoutes() {
  return (
    <>
          <Route exact path="/admin">
            <AdminLayout title={'Dashboard'}>
              <Dashboard/>
            </AdminLayout>
          </Route>

          <Route path="/admin/user/manage">
            <AdminLayout title={'User Management'}>
              <UserManagement/>
            </AdminLayout>
          </Route>

          <Route path="/admin/requests/" exact>
            <AdminLayout title={'Manage Requests'}>
              <ManageRequests/>
            </AdminLayout>
          </Route>
          
          <Route path="/admin/requests/:id" exact>
            <AdminLayout title={'Manage Requests'}>
              <RequestsDetail/>
            </AdminLayout>
          </Route>

          <Route path="/admin/products" exact>
            <AdminLayout title={'Manage Products'}>
              <Products/>
            </AdminLayout>
          </Route>

          <Route path="/admin/create/products" exact>
            <AdminLayout title={'Create Products'}>
              <Products/>
            </AdminLayout>
          </Route>

          <Route path="/admin/edit/products/:id">
            <AdminLayout title={'Update Products'}>
              <UpdateProducts/>
            </AdminLayout>
          </Route>

          <Route path="/admin/products/:id">
            <AdminLayout title={'Manage Products'}>
              <ProductsDetail/>
            </AdminLayout>
          </Route>
          
          <Route path="/admin/login">
            <Login/>
          </Route>

        <Route>
            <Layout><Error404/></Layout>
        </Route>
    </>
  );
}

export default AdminRoutes;
