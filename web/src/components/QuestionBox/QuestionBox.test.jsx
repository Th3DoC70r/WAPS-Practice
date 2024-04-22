import { render } from '@redwoodjs/testing/web'

import QuestionBox from './QuestionBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('QuestionBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionBox />)
    }).not.toThrow()
  })
})
