import classNames from 'classnames';
import React from 'react';

const inputClasses = classNames(
  'w-full px-4 py-3 border border-gray-400 rounded-lg',
  'bg-gradient-to-b from-white to-gray-100',
  'shadow-inner focus:outline-none focus:ring-4 focus:ring-teal-400',
  'focus:border-teal-600 transition',
  'placeholder-gray-500 text-gray-900 font-medium'
);

const step2Fields = [
  { id: 'employer', label: 'Employer Name', type: 'text', placeholder: 'Your employer' },
  { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'Your job title' },
  { id: 'income', label: 'Annual Income', type: 'number', placeholder: '50000' },
  { id: 'employmentLength', label: 'Employment Length (years)', type: 'number', placeholder: '3' },
];

type Step2Props = {
  onNext: () => void;
  onBack: () => void;
  formData: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

export const Step2: React.FC<Step2Props> = ({ onNext, onBack, formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
   
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg select-none tracking-wide">
            Step 2: Employment Info
          </h2>

          {step2Fields.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-2 font-semibold text-teal-300 select-none">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                value={formData[id] || ''}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className={inputClasses}
                autoComplete="off"
              />
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
            >
              Next
            </button>
          </div>
        </form>
 
  );
};
