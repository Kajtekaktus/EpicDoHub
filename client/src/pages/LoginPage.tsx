import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";
// import { Navigate, useNavigate } from "react-router";

type User = {
  id: number;
  username: string;
  email: string;
  hashedPassword: string;
  imageUrl: string;
  createdAt: string;
  isLoged: boolean;
};

const LoginPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // fetch users
    fetch("http://localhost:9000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  // @ts-expect-error nie wiem jak otypowac e
  async function formOnSubmitHandler(e) {
    e.preventDefault();
    const email = e.target["email-input"].value;
    const password = e.target["password-input"].value;
    console.log(email);
    console.log(password);

    const response = await fetch("http://localhost:9000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("response status: ", response.status);
    if (response.status === 200) {
      console.log("loged!!!");

      localStorage.setItem("isLoged", "true");
      // przerzucenie do HOME
      // useNavigate nie dziala
      // useNavigate("/login");

    } else if (response.status === 500) {
      alert("connection error");
    } else if (response.status === 400) {
      alert("user doesnt exist");
    }
  }

  function logout() {
    fetch("http://localhost:9000/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div className="text-white">
      <div>
        <h1 className="text-4xl">USERS: </h1>
        {users.map((item) => {
          return (
            <div className="border" key={item.id}>
              <p>username: {item.username}</p>
              <p>email: {item.email}</p>
              <p>password: {item.hashedPassword}</p>
              <p>imageURL: {item.imageUrl}</p>
              <p>createdAt: {item.createdAt}</p>
              <p>
                is loged?: {item.isLoged ? <XCircle onClick={logout} /> : "no"}
              </p>
            </div>
          );
        })}
      </div>
      <form onSubmit={formOnSubmitHandler}>
        <div className="flex flex-col w-1/2 text-4xl">
          <input
            type="email"
            name="email-input"
            id="email-input"
            placeholder="email"
          />
          <input
            type="password"
            name="password-input"
            id="password-input"
            placeholder="password"
          />
        </div>
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default LoginPage;
