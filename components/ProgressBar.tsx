type ProgressIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export const ProgressBar: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full my-4">
      <p className="text-sm text-gray-600 mb-1">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
