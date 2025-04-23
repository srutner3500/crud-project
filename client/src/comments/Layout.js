import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
const Layout = () => {
    return (<div >
        <header> <Navigation /></header>
        <main >
            <Outlet />
        </main>
    </div>)
}
export default Layout