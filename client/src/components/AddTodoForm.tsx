const AddTodoForm = () => {
  return (
    <div className="bg-neutral-500 p-4">
      <form className="flex justify-around items-center" method="post">
        <div>
          <input
            type="text"
            name="name-input"
            id="name-input"
            placeholder="todo heading..."
          />{" "}
          <br />
          <textarea
            className="resize-none"
            name=""
            id=""
            cols={50}
            rows={5}
            placeholder="description"
          ></textarea>{" "}
          <br />
          <label htmlFor="date-input">deadline:</label>
          <input type="date" id="date-input" name="date-input" />
        </div>
        <input type="submit" value="ADD TODO" />
      </form>
    </div>
  );
};

export default AddTodoForm;
