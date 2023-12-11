import { CheckCircle, XCircle } from "lucide-react";
import { Todo as TTodo, User } from "../pages/Home";
import { Dispatch, SetStateAction } from "react";

type TodoProps = {
  user: User;
  title: string;
  description: string;
  deadline: Date;
  isDone: boolean;
  todoId: number;
  setTodosArr: Dispatch<SetStateAction<TTodo[]>>;
};
const Todo = ({
  user,
  title,
  description,
  deadline,
  isDone,
  todoId,
  setTodosArr,
}: TodoProps) => {
  const presentDay = new Date();
  deadline = new Date(deadline);

  async function changeIsDone() {
    const response = await fetch("http://localhost:9000/todos/editIsDone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone, todoId }),
    });

    if (response.status == 200) {
      setTodosArr((prev) =>
        prev.map((item) =>
          item.id === todoId ? { ...item, isDone: !isDone } : item
        )
      );
    } else if (response.status == 500) alert("server error");
  }

  async function deleteTodo() {
    const response = await fetch("http://localhost:9000/todos/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todoId }),
    });

    if (response.status == 200) {
      setTodosArr((prev) => prev.filter((item) => item.id !== todoId));
    } else if (response.status == 500) alert("server error");
  }

  return (
    <div className="bg-slate-200">
      {/* header */}
      <div className="py-4">
        {/* <div className="flex gap-4 justify-center">
          <img src={user.imageUrl} alt="user image" />
          <p>{user.userName}</p>
        </div> */}
        <h2 className="text-center">{title}</h2>
      </div>
      {/* main */}
      <div className="px-4">
        <div className="border border-black">
          <p>{description}</p>
        </div>
        <p>
          remaining time:{" "}
          {Math.round(
            (deadline.getTime() - presentDay.getTime()) / (1000 * 3600 * 24)
          )}{" "}
          days
        </p>
        <div>
          {/* {isDone ? <CheckCircle /> : <CheckCircle className="opacity-50" />} */}
          <CheckCircle
            onClick={changeIsDone}
            className={`${!isDone && "opacity-50"}`}
          />
        </div>
        <div>
          <XCircle onClick={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
