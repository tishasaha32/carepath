import React, { useState } from "react";
import OnboardingStep1 from "../component/OnboardingStep1";
import OnboardingStep2 from "../component/OnboardingStep2";
import OnboardingStep3 from "../component/OnboardingStep3";
import { useNavigate } from "react-router-dom";

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const finishOnboarding = () => {
    onComplete();
    navigate("/diseaseCategories");
    console.log("Onboarding complete!");
  };
  const skipOnboarding = () => {
    onComplete();
    navigate("/diseaseCategories");
  };

  return (
    <div>
      {step === 1 && <OnboardingStep1 next={nextStep} skip={skipOnboarding} />}
      {step === 2 && <OnboardingStep2 next={nextStep} skip={skipOnboarding} />}
      {step === 3 && (
        <OnboardingStep3 finish={finishOnboarding} skip={skipOnboarding} />
      )}
    </div>
  );
};

export default Onboarding;
