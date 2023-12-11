import { useEffect, useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodosWrapper from "../components/TodosWrapper";
import Navbar from "../components/Navbar";

export type Todo = {
  id: number;
  title: string;
  description: string;
  userId: number;
  deadline: Date;
  isDone: boolean;
  createdAt: Date;
};

const Home = () => {
  const [todosArr, setTodosArr] = useState<Todo[]>([]);
  const isLoged = localStorage.getItem("isLoged");
  console.log("isLoged: ", isLoged);

  useEffect(() => {
    if (isLoged === "true") {
      // fetch todos
      fetch("http://localhost:9000/todos")
        .then((res) => res.json())
        .then((data) => setTodosArr(data));
    }
  }, [isLoged]);

  console.log(todosArr);

  return (
    <>
      <Navbar />
      <AddTodoForm setTodosArr={setTodosArr} />
      <TodosWrapper todosArr={todosArr} setTodosArr={setTodosArr} />
    </>
  );
};

export default Home;
