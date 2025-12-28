import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <section className="min-h-screen bg-[#F6F7F8]">
      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-50 w-58 bg-accent text-white transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="w-32.75 h-6.75">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="mt-7.25 w-[90%]">
          <SideBar onNavigate={() => setIsSidebarOpen(false)} />
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <header className="fixed top-0 left-0 right-0 lg:left-58 z-40">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
      </header>

      <AnimatePresence mode="wait">
        <main className="pt-18 lg:pl-58 min-h-screen overflow-x-hidden">
          <motion.div
            key={location.pathname}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </main>
      </AnimatePresence>
    </section>
  );
}
