import { Dispatch, SetStateAction } from "react";
import { Todo } from "../pages/Home";

type AddTodoFormProps = {
  setTodosArr: Dispatch<SetStateAction<Todo[]>>;
};

const AddTodoForm = ({ setTodosArr }: AddTodoFormProps) => {
  // @ts-expect-error xdd
  async function onSubmitHandler(e) {
    e.preventDefault();
    const title = e.target["title-input"].value;
    const description = e.target["description-input"].value;
    const deadline = e.target["deadline-input"].value;

    console.log(deadline);

    const response = await fetch("http://localhost:9000/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, deadline }),
    });

    if (response.status == 200) {
      const data = await response.json();

      setTodosArr((prev) => [
        ...prev,
        {
          id: data.insertId,
          title,
          description,
          deadline,
          isDone: false,
          createdAt: new Date(),
        },
      ]);
    } else if (response.status == 500) alert("server error");
    e.target.reset();
  }

  return (
    <div className="bg-neutral-500 p-4">
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex justify-around items-center"
      >
        <div>
          <input
            type="text"
            name="title-input"
            id="title-input"
            placeholder="todo title..."
          />{" "}
          <br />
          <textarea
            className="resize-none"
            name="description-input"
            id="description-input"
            cols={50}
            rows={5}
            placeholder="description"
          ></textarea>{" "}
          <br />
          <label htmlFor="deadline-input">deadline:</label>
          <input type="date" id="deadline-input" name="deadline-input" />
        </div>
        <input type="submit" value="ADD TODO" />
      </form>
    </div>
  );
};

export default AddTodoForm;
