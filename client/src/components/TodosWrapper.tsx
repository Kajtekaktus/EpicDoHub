import { Dispatch, SetStateAction } from "react";
import { Todo as TTodo } from "../pages/Home";
import Todo from "./Todo";

type TodosWrapperProps = {
  todosArr: TTodo[];
  setTodosArr: Dispatch<SetStateAction<TTodo[]>>
};

const user = {
  id: 1,
  userName:'kaktus',
  imageUrl: ''
}

const TodosWrapper = ({ todosArr, setTodosArr }: TodosWrapperProps) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {todosArr.map((item, index) => {
        return (
          <Todo
            key={index}
            todoId={item.id}
            user={user}
            title={item.title}
            description={item.description}
            deadline={item.deadline}
            isDone={item.isDone}
            setTodosArr={setTodosArr}
          />
        );
      })}
    </div>
  );
};

export default TodosWrapper;
