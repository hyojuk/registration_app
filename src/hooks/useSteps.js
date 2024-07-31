import { useState } from "react";

function useSteps() {
    const [step, setSteps] = useState(1);

    function addCurrentStep() {
        setSteps(step+1);
    }

    function backCurrentStep() {
        setSteps(step-1);
    }

    return {step, addCurrentStep, backCurrentStep};
}

export default useSteps;