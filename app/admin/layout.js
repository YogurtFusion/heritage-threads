import AdminSidebar from "@/sections/admin/AdminSidebar";


export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-background">
      
      {/* 1. The Sidebar stays fixed on the left */}
      <AdminSidebar />

      {/* 2. The Main Content fills the remaining space */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}