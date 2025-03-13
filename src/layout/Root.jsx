import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-64px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;