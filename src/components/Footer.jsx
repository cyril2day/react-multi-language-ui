import { Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'


const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className='bg-gray-800 text-white py-8 mt-12'>
      <div className='container mx-auto px-4 text-center'>
        <div className='flex items-center justify-center space-x-2 mb-4'>
          <Heart className='w-5 h-5 text-red-400 animate-pulse' />
          <p>{t('footerText')}</p>
          <Heart className='w-5 h-5 text-red-400 animate-pulse' />
        </div>

        <p>
          © {new Date().getFullYear()} StoryTime - {t('storyList')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
