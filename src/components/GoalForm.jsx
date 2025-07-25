function GoalForm({ goalInput, setGoalInput, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="relative z-10 w-full max-w-xl flex flex-col sm:flex-row gap-4 mb-12"
    >
      <input
        type="text"
        value={goalInput}
        onChange={(e) => setGoalInput(e.target.value)}
        placeholder="Enter your goal"
        className="flex-grow px-5 py-3 rounded-xl shadow-lg border border-transparent focus:outline-none focus:ring-4 focus:ring-purple-300 text-white text-xl font-semibold"
      />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 px-6 py-3 rounded-xl text-white font-bold shadow-lg"
      >
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;