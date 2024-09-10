import SideMenu from "@/components/SideMenu/SideMenu";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
