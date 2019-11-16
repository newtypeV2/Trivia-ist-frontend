import React from 'react'

const QuizPage = (props) => {

    const clickHandler = (e) => {
        console.log(e.currentTarget.value)
    }

    const renderQuiz = () => {
        return props.quizInfo.map(quiz => <li key={quiz.id}>
            <span className='list'>{quiz.title}</span>
                <input className='listbutton' type='button' value='EDIT' onClick={clickHandler}/>
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
