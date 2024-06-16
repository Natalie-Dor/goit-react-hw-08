import { lazy, Suspense } from "react";
// , useEffect
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsRefreshing } from "../redux/auth/selectors";
// import { refreshUser } from "../redux/auth/operations";
// import RestrictedRoute from "./RestrictedRoute";
// import PrivateRoute from "./PrivateRoute";
// import Loader from "../components/Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
// export default function App() {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);
//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);
//   return isRefreshing ? (
//     <Loader />
//   ) : (
//     <Layout>
//       <Suspense fallback={null}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/register"
//             element={
//               <RestrictedRoute
//                 redirectTo="/contacts"
//                 component={<RegisterPage />}
//               />
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <RestrictedRoute
//                 redirectTo="/contacts"
//                 component={<LoginPage />}
//               />
//             }
//           />
//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//             }
//           />
//         </Routes>
//       </Suspense>
//     </Layout>
//   );
// }
