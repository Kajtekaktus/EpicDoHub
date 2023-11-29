import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodosWrapper from "../components/TodosWrapper";
import Navbar from "../components/Navbar";

export type User = {
  id: number;
  userName: string;
  ImageUrl: string;
};

export type Todo = {
  id: number;
  name: string;
  description: string;
  user: User;
  deadline: Date;
  isDone: boolean;
};

const defaultTodos: Todo[] = [
  {
    id: 1,
    name: "Buy groceries",
    description: "Milk, eggs, bread",
    user: {
      id: 101,
      userName: "john_doe",
      ImageUrl: "profile_images/john_doe.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: false,
  },
  {
    id: 2,
    name: "Complete project report",
    description: "Include data analysis and conclusions",
    user: {
      id: 102,
      userName: "jane_smith",
      ImageUrl: "profile_images/jane_smith.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: false,
  },
  {
    id: 3,
    name: "Workout",
    description: "Cardio and strength training",
    user: {
      id: 103,
      userName: "fitness_guru",
      ImageUrl: "profile_images/fitness_guru.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: true,
  },
  {
    id: 4,
    name: "Read book",
    description: "Finish 'The Great Gatsby'",
    user: {
      id: 104,
      userName: "book_lover",
      ImageUrl: "profile_images/book_lover.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: false,
  },
  {
    id: 5,
    name: "Plan weekend trip",
    description: "Explore local attractions",
    user: {
      id: 105,
      userName: "travel_bug",
      ImageUrl: "profile_images/travel_bug.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: false,
  },
  {
    id: 6,
    name: "Attend webinar",
    description: "Learn about new technologies",
    user: {
      id: 106,
      userName: "tech_enthusiast",
      ImageUrl: "profile_images/tech_enthusiast.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: true,
  },
  {
    id: 7,
    name: "Write blog post",
    description: "Topic: Sustainable living",
    user: {
      id: 107,
      userName: "eco_activist",
      ImageUrl: "profile_images/eco_activist.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: false,
  },
  {
    id: 8,
    name: "Practice guitar",
    description: "Learn new chords and songs",
    user: {
      id: 108,
      userName: "musician_at_heart",
      ImageUrl: "profile_images/musician_at_heart.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: true,
  },
  {
    id: 9,
    name: "Update resume",
    description: "Add recent achievements",
    user: {
      id: 109,
      userName: "career_builder",
      ImageUrl: "profile_images/career_builder.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: false,
  },
  {
    id: 10,
    name: "Bake cookies",
    description: "Chocolate chip cookies",
    user: {
      id: 110,
      userName: "baking_enthusiast",
      ImageUrl: "profile_images/baking_enthusiast.jpg",
    },
    deadline: new Date("2024/02/03"),
    isDone: false,
  },
];

const Home = () => {
  const [todosArr, setTodosArr] = useState<Todo[]>(defaultTodos);

  return (
    <>
      <Navbar />
      <AddTodoForm />
      <TodosWrapper todosArr={todosArr} />
    </>
  );
};

export default Home;
