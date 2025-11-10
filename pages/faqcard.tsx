import { useState, FC } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: FC<FAQCardProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white shadow-md rounded-xl p-4 mb-4 cursor-pointer transition-all duration-300 border border-gray-200"
      onClick={() => setOpen(!open)}
    >
      {/* Question + Icon */}
      <div className="flex items-center justify-between w-full">
        <strong>
          {' '}
          <span className="text-lg font-semibold text-gray-800 flex-1">
            {question}
          </span>
        </strong>
        <span className="text-gray-500 flex-shrink-0">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </div>

      {/* Answer (only visible if open) */}
      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default FAQCard;
