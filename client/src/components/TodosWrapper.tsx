import { Todo as TTodo } from "../pages/Home";
import Todo from "./Todo";

type TodosWrapperProps = {
  todosArr: TTodo[];
};

const TodosWrapper = ({ todosArr }: TodosWrapperProps) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {todosArr.map((item) => {
        return (
          <Todo
            key={item.id}
            user={item.user}
            name={item.name}
            description={item.description}
            deadline={item.deadline}
            isDone={item.isDone}
          />
        );
      })}
    </div>
  );
};

export default TodosWrapper;
