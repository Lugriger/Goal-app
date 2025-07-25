
import { Trash2, Eye, EyeOff } from 'lucide-react'

function GoalCard({ goal, index, onMindChange, onToggleMind, onDelete }) {
  return (
    <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl text-black flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
      <div className="flex-grow">
        <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2">
          {goal.text}
        </h2>

        {goal.showMind && (
          <textarea
            value={goal.mind}
            onChange={(e) => onMindChange(index, e.target.value)}
            placeholder="How will you achieve this goal?"
            className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 resize-y min-h-[100px] text-lg"
          />
        )}
      </div>

      <div className="flex flex-row sm:flex-col gap-3 items-stretch justify-center sm:items-end">
        <button
          onClick={() => onToggleMind(index)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 w-full hover:cursor-pointer"
        >
          {goal.showMind ? 
          (
          <div className='flex gap-2 '>
            <span>Hide Details</span>
            <EyeOff />
          </div>
          ) 
          : (
            <div className='flex gap-2'>
              <span>Show Details</span> 
              <Eye />
            </div>
            
            )}
        </button>
        <button
          onClick={() => onDelete(index)}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition w-full flex gap-4 hover:cursor-pointer"
        >
          Delete Goal
          <Trash2/>
        </button>
        
      </div>
    </div>
  );
}

export default GoalCard;
