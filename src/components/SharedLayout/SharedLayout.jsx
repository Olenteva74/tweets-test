import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "components/Loader";
import { ColorContainer, MainContainer, Header, Nav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <ColorContainer>
        <MainContainer>
            <Header>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/tweets">Tweets</Link>
                </Nav>
            </Header>
            <main>
                <ToastContainer theme="colored"/>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>

            </main>
        </MainContainer>
        </ColorContainer>
    )
}