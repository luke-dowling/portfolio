import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export const NotFound = () => {
  return (
    <div>
      <h1 className='pt-16'>I'm not sure how you got here? 🤔 </h1>
      <h2 className='pt-4'>
        How about heading back to the{' '}
        <Link to={'/'} className='underline text-primary-orange flex gap-3'>
          homepage <FaArrowRight />
        </Link>
      </h2>
    </div>
  )
}
