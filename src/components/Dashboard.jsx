import React, { useContext } from "react";
import UserContext from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);

  console.log(user);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.email}</p>
      <button onClick={logout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
