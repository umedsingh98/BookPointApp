import React from "react";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
function Logout() {

    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            toast.success("Logged Out Successfully!")
            setTimeout(() => {
                window.location.href = "/";
                localStorage.removeItem("Users");    
            },1500);
            
            
        } catch (error) {
            
            toast.error("Error: " + error.message)
        }
    }

  return (
    <div>
      <button type="submit" className="rounded-md text-xs md:text-base bg-red-700 px-3 py-2 text-white cursor-pointer hover:bg-red-500" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
