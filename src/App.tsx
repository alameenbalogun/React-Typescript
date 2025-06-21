import Header from "./components/Header";
import internetImage from "./assets/internet.png";
import "./App.css";
import CourseGoals from "./components/CourseGoals";
import { useState } from "react";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Typescript",
      description: "Learning the fundamnetals",
    },
    {
      id: 2,
      title: "Typescript",
      description: "Learning the fundamnetals",
    },
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: internetImage, alt: "Internet" }}>
        Your Goals
      </Header>
      <CourseGoals goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
