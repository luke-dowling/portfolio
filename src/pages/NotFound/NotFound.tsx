import { Link } from 'react-router-dom'
import './_notFound.scss'
import { FaArrowRight } from 'react-icons/fa'

export const NotFound = () => {
  return (
    <div className='error404'>
      <h1>I'm not sure how you got here? 🤔 </h1>
      <h2>
        How about heading back to the{' '}
        <Link to={'/'}>
          homepage <FaArrowRight />
        </Link>
      </h2>
    </div>
  )
}
