import GoalCard from './GoalCard';

function GoalList({ goals, onMindChange, onToggleMind, onDelete }) {
  return (
    <div className="relative z-10 w-full max-w-3xl space-y-8">
      {goals.map((goal, index) => (
        <GoalCard
          key={index}
          goal={goal}
          index={index}
          onMindChange={onMindChange}
          onToggleMind={onToggleMind}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default GoalList;
