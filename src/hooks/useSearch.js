import { useState } from "react";

function useSearch() {
    const [email, setEmail] = useState('');
    const [results, setResults] = useState(undefined);

    return {
        email, setEmail, results, setResults
    };
}

export default useSearch;