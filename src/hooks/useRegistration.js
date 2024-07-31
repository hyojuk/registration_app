import { useState } from "react";

function useRegistration(currentStep) {
    const [registration, setRegistration] = useState({});

    return {
        registration, 
        setRegistration
    };
}

export default useRegistration;