type Goal = {
  id: number;
  title: string;
  description: string;
};

interface CourseGoalsProps {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoals({ goals, onDeleteGoal }: CourseGoalsProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <article>
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
            </div>
            <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
          </article>
        </li>
      ))}
    </ul>
  );
}
