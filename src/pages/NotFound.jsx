import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const NotFound = () => {

  const { t } = useLanguage()

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          404
        </h1>

        <p className='text-xl text-gray-600 mb-4'>
          {t('notFoundMessage')}
        </p>

        <Link to='/' className='text-blue-500 hover:text-blue-700 underline'>
          {t('returnHome')}
        </Link>
      </div>
    </div>
  )
}

export default NotFound
