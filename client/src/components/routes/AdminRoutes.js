import {Route} from 'react-router-dom'
import Layout from '../adminComponents/views/AdminLayout/Layout';
import Dashboard from "../adminComponents/views/AdminDashboard/Dashboard";
import Products from "../adminComponents/views/AdminProducts/Products";
import ProductsDetail from "../adminComponents/views/AdminProductsDetail/ProductsDetail";
import Login from '../adminComponents/views/AdminLogin/Login';
import ManageRequests from '../adminComponents/views/AdminManageRequests/ManageRequests';
import UserManagement from '../adminComponents/views/AdminUserManagement/UserManagement';
import RequestsDetail from '../adminComponents/views/AdminRequestsDetail/RequestsDetail';
import UpdateProducts from '../adminComponents/views/AdminUpdateProducts/UpdateProducts';

function AdminRoutes() {
  return (
    <>
          <Route exact path="/admin">
            <Layout title={'Dashboard'}>
              <Dashboard/>
            </Layout>
          </Route>

          <Route path="/admin/user/manage">
            <Layout title={'User Management'}>
              <UserManagement/>
            </Layout>
          </Route>

          <Route path="/admin/requests/" exact>
            <Layout title={'Manage Requests'}>
              <ManageRequests/>
            </Layout>
          </Route>
          
          <Route path="/admin/requests/:id" exact>
            <Layout title={'Manage Requests'}>
              <RequestsDetail/>
            </Layout>
          </Route>

          <Route path="/admin/products" exact>
            <Layout title={'Manage Products'}>
              <Products/>
            </Layout>
          </Route>

          <Route path="/admin/create/products" exact>
            <Layout title={'Create Products'}>
              <Products/>
            </Layout>
          </Route>

          <Route path="/admin/edit/products/:id">
            <Layout title={'Update Products'}>
              <UpdateProducts/>
            </Layout>
          </Route>

          <Route path="/admin/products/:id">
            <Layout title={'Manage Products'}>
              <ProductsDetail/>
            </Layout>
          </Route>
          
          <Route path="/admin/login">
            <Login/>
          </Route>
    </>
  );
}

export default AdminRoutes;
