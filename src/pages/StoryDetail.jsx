import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'
import LoadingScreen from '../components/LoadingScreen'
import { ArrowLeft, User, BookOpen } from 'lucide-react'


const StoryDetail = () => {

  const { slug } = useParams()

  const { t, language } = useLanguage()

  const [story, setStory] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStory = async () => {
      setLoading(true)

      try {
        const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('slug', slug)
        .eq('language', language)
        .single()

        if (error) throw error

        setStory(data)
      } catch (error) {
        console.error('Failed to load story', error.message)
      } finally {
        setLoading(false)
      }
    }
    loadStory()
  }, [slug, language])

  const getStoryGradient = (storySlug) => {
    const gradient = {
      "tortoise-hare": "from-green-400 via-blue-500 to-purple-600",
      "little-red-riding-hood": "from-red-400 via-pink-500 to-rose-600",
      "three-little-pigs": "from-yellow-400 via-orange-500 to-red-600",
      "goldilocks-three-bears": "from-amber-400 via-yellow-500 to-orange-600",
      "jack-beanstalk": "from-emerald-400 via-green-500 to-teal-600",
    }

    return gradient[storySlug] || 'from-purple-400 via-pink-500 to-indigo-600'
  }

  if (loading) {
    <LoadingScreen message='Loading your story...' /> 
  }

  if (!story) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-gray-600 text-xl mb-4'>Story not found</p>

            <Link
              to='/'
              className='inline-flex items-center space-x-2 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors'
            >
              <ArrowLeft className='w-4 h-4' />

              <span>{t('backToStories')}</span>
            </Link>
          </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50'>
      <div className={`bg-gradient-to-r ${getStoryGradient(story.slug)} py-16`}>
        <div className='container mx-auto px-4'>
          <Link
            to='/'
            className='inline-flex items-center space-x-2 text-white hover:text-gray-200 transition-colors mb-8 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30'
          >
            <ArrowLeft className='w-4 h-4' />
            <span className='font-medium'>{t('backToStories')}</span>
          </Link>

          <div className='text-center text-white'>
            <div className='flex items-center justify-center mb-6'>
              <BookOpen className='w-16 h-16 drop-shadow-lg' />
            </div>

            <h1 className='text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg'>
              {story.title}
            </h1>

            <div className='flex items-center justify-center space-x-2 text-lg'>
              <User className='w-5 h-5' />
              <span>
                {t('author')}: {story.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default StoryDetail
