import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'
import { BookOpen } from 'lucide-react'

const Header = () => {
  const { t } = useLanguage()
  return (
    <header className='bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-lg'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex justify-between items-center'>
          <Link
            to="/"
            className='flex items-center space-x-3 group'
          >
            <div className='bg-white p-2 rounded-full shadow-md group-hover:shadow-lg transition-shadow'>
              <BookOpen className='w-8 h-8 text-purple-600' />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-white drop-shadow-md'>
                {t('siteTitle')}
              </h1>
              <p className='text-purple-100 text-sm'>{t('storyList')}</p>
            </div>
          </Link>

          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
