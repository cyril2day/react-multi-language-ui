import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Header from './components/Header'
import StoryList from './pages/StoryList'
import StoryDetail from './pages/StoryDetail'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const LanguageTest = () => {
  const { language, setLanguage , t } = useLanguage()
  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-2xl font-bold'>{t('siteTitle')}</h1>
      <p>Current Language: {language}</p>

      <div className='space-x-2'>
        <button
          onClick={() => setLanguage('en')}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          English
        </button>
        <button
          onClick={() => setLanguage('es')}
          className='bg-pink-500 text-white px-4 py-2 rounded'
        >
          Español
        </button>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <LanguageProvider>
      <LanguageTest />
    </LanguageProvider>
  )
}

export default App
