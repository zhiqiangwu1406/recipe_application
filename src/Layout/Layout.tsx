import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <main className="max-w-4xl mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
