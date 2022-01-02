import "./App.css";
import HomeDetails from "./modules/HomeDetails/pages/HomeDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./modules/HomePage/pages/HomePage";
import Profile from "./modules/Profile";
import SearchPage from "./modules/HomeSearch/pages/SearchPage";
import Login from "./modules/Auth/pages/Login";
import Register from "./modules/Auth/pages/Register";
import Footer from "./components/Footer";
import AdminUser from "./modules/HomeManagement/pages/QuanLyUser";
import AdminViTri from "./modules/HomeManagement/pages/QuanLyViTri";
import AdminLayout from "./layout/AdminLayout";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]}>
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
        <Route
          exact
          path={["/search/:province", "/details/:name", "/profile/:name"]}
        >
          <Switch>
            <Route path="/search/:province">
              <SearchPage />
            </Route>
            <Route path="/details/:name">
              <HomeDetails />
            </Route>
            <Route path="/profile/:name">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Route>
        <Route exact path={["/login", "/register"]}>
          {/* <AuthLayout> */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          {/* </AuthLayout> */}
        </Route>
        {/* <Route
          exact
          path={["/admin", "/admin/quanlynguoidung", "/admin/quanlyvitri"]}
        >
          <Header />
          <Route path="/admin/quanlynguoidung">
            <QuanLyNguoiDung />
          </Route>
          <Route path="/admin/quanlyvitri">
            <QuanLyViTri />
          </Route>
        </Route> */}
        <Route>
          {/* <Header /> */}
          <AdminLayout>
            <Switch>
              <Route path="/admin/quanlynguoidung">
                <AdminUser />
              </Route>
              <Route path="/admin/quanlyvitri">
                <AdminViTri />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>
        ;
      </Switch>
    </Router>
  );
}

export default App;
