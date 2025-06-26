import classNames from 'classnames';
import { Button } from 'flowbite-react';
import React from 'react';

const inputClasses = classNames(
  'w-full px-4 py-3 border border-gray-400 rounded-lg',
  'bg-gradient-to-b from-white to-gray-100',
  'shadow-inner focus:outline-none focus:ring-4 focus:ring-teal-400',
  'focus:border-teal-600 transition',
  'placeholder-gray-500 text-gray-900 font-medium'
);

const step1Fields = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Doe' },
  { id: 'dob', label: 'Date of Birth', type: 'date', placeholder: '' },
  { id: 'zip', label: 'ZIP Code', type: 'text', placeholder: '12345', maxLength: 10 },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567' },
];

type Step1Props = {
  onNext: () => void;
  formData: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

export const Step1: React.FC<Step1Props> = ({ onNext, formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (

        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg select-none tracking-wide">
            Step 1: Personal Info
          </h2>

          {step1Fields.map(({ id, label, type, placeholder, maxLength }) => (
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
                maxLength={maxLength}
                required
                className={inputClasses}
                autoComplete="off"
              />
            </div>
          ))}

          <Button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
          >
            Next
          </Button>
        </form>
 
  );
};
