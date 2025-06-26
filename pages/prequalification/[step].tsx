import React, { useState } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { ProgressBar } from '@/components/ProgressBar';
import { Step1 } from '@/components/StepForm/Step1';
import { Step2 } from '@/components/StepForm/Step2';
import { Step3 } from '@/components/StepForm/Step3';

const Page = () => {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const nextStep = () => setCurrentStep(step => Math.min(totalSteps, step + 1));
  const prevStep = () => setCurrentStep(step => Math.max(1, step - 1));

  return (
    <>
      <BaseLayout>
        <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-2">
        <div className='w-full max-w-2xl md:px-4 md:pt-10 md:pb-4'>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
        {currentStep === 1 && (
          <Step1 onNext={nextStep} formData={formData} setFormData={setFormData} />
        )}

        {currentStep === 2 && (
          <Step2 onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />
        )}

        {currentStep === 3 && (
          <Step3 onBack={prevStep} formData={formData} setFormData={setFormData} />
        )}
        </BaseLayout.MainContent>
     </BaseLayout>
    </>
  );
};
export default Page;