import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import QuestionBox from 'src/components/QuestionBox/QuestionBox'

const HomePage = () => {
  const [correct, setCorrect] = useState(0)
  const [answered, setAnswered] = useState(0)
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>{answered}/100 answered!</h1>
      <h2>{correct}/100 correct!</h2>

      <QuestionBox setCorrect={setCorrect} setAnswered={setAnswered} />
    </>
  )
}

export default HomePage
