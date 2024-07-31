import { useState } from "react";

function useStudents() {
    const [students, setStudents] = useState({
        krName: '',
        engName: '',
        birthdate: '',
        grade: '',
        gender: '',
        fluency: '',
        religion: '',
        dietaryNotes: '',
        comments: '',
        classDay: '',
    });

    return {students, setStudents};
}

export default useStudents;