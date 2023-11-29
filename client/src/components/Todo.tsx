import { CheckCircle } from "lucide-react";
import { User } from "../pages/Home";

type TodoProps = {
  user: User;
  name: string;
  description: string;
  deadline: Date;
  isDone: boolean;
};

const Todo = ({ user, name, description, deadline, isDone }: TodoProps) => {
  const presentDay = new Date();
  return (
    <div className="bg-slate-200">
      {/* header */}
      <div className="py-4">
        <div className="flex gap-4 justify-center">
          <img src={user.ImageUrl} alt="user image" />
          <p>{user.userName}</p>
        </div>
        <h2 className="text-center">{name}</h2>
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
          {isDone ? <CheckCircle /> : <CheckCircle className="opacity-50"/>}
        </div>
      </div>
    </div>
  );
};

export default Todo;
