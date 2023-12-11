import { NavLink, redirect } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  async function logout() {
    const response = await fetch("http://localhost:9000/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      localStorage.setItem("isLoged", "false");
      redirect("/");
    } else if (response.status === 500) {
      alert("nie dziala");
    }
  }
  return (
    <div className="bg-slate-300 flex justify-around py-4 items-center">
      <h1 className="text-xl">EpicDoHub</h1>
      {localStorage.isLoged === "false" ? (
        <div className="login-container flex gap-3">
          <NavLink className={"button"} to="/login">
            sign in
          </NavLink>
          <NavLink className={"button"} to="/register">
            sign up
          </NavLink>
        </div>
      ) : (
        <button onClick={logout} className="button">
          logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
