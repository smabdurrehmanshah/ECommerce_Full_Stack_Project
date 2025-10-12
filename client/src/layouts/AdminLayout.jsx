import AppSidebar from "@/components/custom/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="sm:m-5">
           <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}

export default AdminLayout;
