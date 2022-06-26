import { useState } from "react";

function AddQuiz() {
    const [quizName, setQuizName] = useState('');
    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Quiz Name</label>
                <input type="text" className="form-control" placeholder="Enter quiz name" value={quizName} onChange={(e) => setQuizName(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    )
}

export default AddQuiz;