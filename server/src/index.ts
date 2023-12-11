import express, { Request, Response } from "express";
import mysql from "mysql";
import cors from "cors";
import { log } from "console";

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "EpicDoHub",
});

connection.connect();
app.get("/users", (req: Request, res: Response) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/todos", (req: Request, res: Response) => {
  connection.query(
    "SELECT todos.id, todos.title , todos.description, todos.isDone, todos.deadline, todos.createdAt, todos.userId FROM todos, users WHERE todos.userId=users.id AND users.isLoged=1;",
    (err, result) => {
      if (err) throw err;
      res.send(result);
    },
  );
});

app.post("/todos/add", (req: Request, res: Response) => {
  console.log("add fetch dziala!!!");

  connection.query(
    `INSERT INTO todos (title, description, isDone, userId, deadline) VALUES ('${req.body.title}','${req.body.description}', 0, 1, '${req.body.deadline}' )`,
    (err, result) => {
      if (err) res.send().status(500);
      res.json({ insertId: result.insertId }).status(200);
      console.log(result);
    },
  );
});

app.delete("/todos/delete", (req: Request, res: Response) => {
  console.log("delete fetch dziala!!!");

  connection.query(
    `DELETE FROM todos WHERE id=${req.body.todoId}`,
    (err, result) => {
      if (err) res.send().status(500);

      res.send().status(200);
    },
  );
});

app.post("/todos/editIsDone", (req: Request, res: Response) => {
  console.log("edit fetch dziala!!!");

  connection.query(
    `UPDATE todos SET isDone=${req.body.isDone ? 0 : 1} WHERE id=${
      req.body.todoId
    }`,
    (err, result) => {
      if (err) res.send().status(500);
      res.send().status(200);
    },
  );
});

app.post("/users/login", (req: Request, res: Response) => {
  console.log("login user fetch dziala!!!");

  connection.query(
    `UPDATE users SET isLoged=1 WHERE email='${req.body.email}' AND hashedPassword='${req.body.password}'`,
    (err, result) => {
      if (err) res.send().status(500);
      console.log(result);
      if (result.affectedRows == 0) {
        console.log("gowno");
        res.status(400);
      } else res.status(200);
      res.send();
    },
  );
});

app.post("/users/logout", (req: Request, res: Response) => {
  console.log("logout user fetch dziala!!!");

  connection.query(
    "UPDATE users SET isLoged=0 WHERE isLoged=1",
    (err, result) => {
      if (err) res.send().status(500);
      res.status(200);
      res.send();
    },
  );
});

// connection.end();
