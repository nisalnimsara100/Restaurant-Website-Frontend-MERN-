import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import {
  FaEdit,
  FaLocationArrow,
  FaPlusCircle,
  FaQuestionCircle,
  FaRegUser,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Login from "../components/Login";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const MenuItem = ({ to, icon: Icon, label, isActive }) => (
  <Link 
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
      ${isActive 
        ? 'bg-green text-white font-medium shadow-sm' 
        : 'hover:bg-gray-100 text-gray-600'}`}
  >
    <Icon className={`text-lg ${isActive ? 'text-white' : 'text-gray-400'}`} />
    <span>{label}</span>
  </Link>
);

const MenuSection = ({ title, children }) => (
  <div className="mb-6">
    {title && (
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">
        {title}
      </h3>
    )}
    <div className="space-y-1">
      {children}
    </div>
  </div>
);

const DashboardLayout = () => {
  const { loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading) return <Login />;
  if (!isAdmin) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Link to="/">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Mobile Header */}
          <div className="sm:hidden flex items-center justify-between p-4 bg-white border-b">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <MdDashboardCustomize className="text-xl" />
            </label>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
              <FaRegUser /> Logout
            </button>
          </div>
          
          {/* Page Content */}
          <div className="p-6">
            <Outlet />
          </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <aside className="w-80 min-h-screen bg-white border-r">
            {/* Logo Section */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="font-bold text-gray-900">Restaurant Admin</h1>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    Admin Panel
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-6">
              {/* Admin Section */}
              <MenuSection title="Administration">
                <MenuItem 
                  to="/dashboard" 
                  icon={MdDashboard} 
                  label="Dashboard"
                  isActive={location.pathname === '/dashboard'}
                />
                <MenuItem 
                  to="/dashboard/manage-bookings" 
                  icon={FaShoppingBag} 
                  label="Manage Bookings"
                  isActive={location.pathname === '/dashboard/manage-bookings'}
                />
                <MenuItem 
                  to="/dashboard/add-menu" 
                  icon={FaPlusCircle} 
                  label="Add Menu"
                  isActive={location.pathname === '/dashboard/add-menu'}
                />
                <MenuItem 
                  to="/dashboard/manage-items" 
                  icon={FaEdit} 
                  label="Manage Items"
                  isActive={location.pathname === '/dashboard/manage-items'}
                />
                <MenuItem 
                  to="/dashboard/users" 
                  icon={FaUser} 
                  label="All Users"
                  isActive={location.pathname === '/dashboard/users'}
                />
              </MenuSection>

              {/* General Section */}
              <MenuSection title="General">
                <MenuItem 
                  to="/" 
                  icon={MdDashboard} 
                  label="Home"
                  isActive={location.pathname === '/'}
                />
                <MenuItem 
                  to="/menu" 
                  icon={FaCartShopping} 
                  label="Menu"
                  isActive={location.pathname === '/menu'}
                />
              </MenuSection>
            </nav>

            
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;