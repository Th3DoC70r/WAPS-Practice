import exam from '../../scripts'

const QuestionBox = () => {
  let ranNumArr = []
  let questions = []
  for (let i = 0; i < 100; i++) {
    let num = Math.round(Math.random())
    if (ranNumArr.includes(num)) {
      num = Math.round(Math.random())
    }
    questions.push(exam[num])
  }
  return <div>{}</div>
}

export default QuestionBox
