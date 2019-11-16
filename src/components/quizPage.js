import React from 'react'

const QuizPage = (props) => {

    const clickHandler = (e) => {
        console.log(e.currentTarget.value)
    }

    const renderQuiz = () => {
        return props.quizInfo.map(quiz => <li key={quiz.id}>
            {/* {quiz.title} */}
            <form>
                <input type='button' value={quiz.title} onClick={clickHandler}/>
            </form>
        </li>)
    }
    return (
        <div>
            <ol>
            {
                renderQuiz()
            }
            </ol>
        </div>
    )
}

export default QuizPage
