import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
import WebFont from 'webfontloader';
import { SharedLayout } from "components/SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Tweets = lazy(() => import("pages/Tweets"));

export const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  );
};
