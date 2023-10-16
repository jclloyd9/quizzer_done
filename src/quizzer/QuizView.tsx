import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizExpanded } from "./QuizExpanded";
import { QuizEdit } from "./QuizEdit";

import "./QuizView.css";

// line 15: Property 'quiz' does not exist on type '{}'.
// line 19:   
    // {quiz: Quiz,
    // editQuiz: (qId: number, newQuiz: Quiz) => void,
    // deleteQuiz: (qId: number) => void,
    // resetView: () => void}
export const QuizView = ({
    quiz,
    editQuiz,
    deleteQuiz,
    resetView
}: {
    quiz: Quiz,
    editQuiz: (qId: number, newQuiz: Quiz) => void,
    deleteQuiz: (qId: number) => void,
    resetView: () => void
}) => {
    const [edit, setEdit] = useState(false);

    const switchEdit = () => {
        setEdit(!edit);
    };

    return (
        <div className="quiz_card">
            {edit && (
                <QuizEdit
                    quiz={quiz}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    switchEdit={switchEdit}
                    resetView={resetView}
                ></QuizEdit>
            )}
            {!edit && (
                <QuizExpanded
                    quiz={quiz}
                    editQuiz={editQuiz}
                    resetView={resetView}
                    switchEdit={switchEdit}
                ></QuizExpanded>
            )}
        </div>
    );
;}