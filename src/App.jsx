import { useState, useEffect } from 'react';
import BlurText from './components/BlurText';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';

function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goalValue, setGoalValue] = useState([]);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem('goals'));
    if (storedGoals) setGoalValue(storedGoals);
  }, []);

 const handleGoalSubmit = (e) => {
    e.preventDefault();
    if (goalInput.trim() !== '') {
      const updated = [...goalValue, { text: goalInput, mind: '', showMind: true }];
      setGoalValue(updated);
      localStorage.setItem('goals', JSON.stringify(updated));
      setGoalInput('');
    }

    
  };

  const handleMindChange = (index, value) => {
    const updated = [...goalValue];
    updated[index].mind = value;
    setGoalValue(updated);
    localStorage.setItem('goals', JSON.stringify(updated));
  };

  const toggleMindVisibility = (index) => {
    const updated = [...goalValue];
    updated[index].showMind = !updated[index].showMind;
    setGoalValue(updated);
    localStorage.setItem('goals', JSON.stringify(updated));
  };

  const handleDeleteGoal = (index) => {
    const updated = goalValue.filter((_, i) => i !== index);
    setGoalValue(updated);
    localStorage.setItem('goals', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-amber-100 px-4 py-8 flex flex-col items-center">
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[80px] sm:text-[140px] md:text-[180px] font-extrabold text-white opacity-10 select-none blur-lg pointer-events-none z-0">
        GOALS
      </h1>

      <BlurText
        text="Welcome to Goal Planner!"
        delay={150}
        animateBy="words"
        direction="top"
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-wide"
      />
      <BlurText
        text="Set your goals and plan your success."
        delay={300}
        animateBy="words"
        direction="top"
        className="relative z-10 text-md sm:text-lg md:text-2xl mb-10 text-center font-semibold tracking-wide"
      />

      <GoalForm
        goalInput={goalInput}
        setGoalInput={setGoalInput}
        onSubmit={handleGoalSubmit}
      />

      <GoalList
        goals={goalValue}
        onMindChange={handleMindChange}
        onToggleMind={toggleMindVisibility}
        onDelete={handleDeleteGoal}
      />
    </div>
  );
}

export default App;
