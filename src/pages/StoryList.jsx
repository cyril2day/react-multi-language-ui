import { useEffect, useState } from 'react'
import StoryCard from '../components/StoryCard'
import { supabase } from '../services/supabase'
import { useLanguage } from '../context/LanguageContext'
import { Stars, Sparkles } from 'lucide-react'

const StoryList = () => {

  const { language, t } = useLanguage()

  const [stories, setStories] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadStories = async () => {

      setLoading(true)

      try {
        const { data, error } = await supabase
          .from('stories')
          .select('*')
          .eq('language', language)
          .order('id', { ascending: true })

        if (error) throw error

        setStories(data || [])
      } catch (error) {
        console.error('Failed to fetch stories:', error.message)
      } finally {
        setLoading(false)
      }

    }
    // loadStories()
  },[language])

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4' />
          <p className='text-gray-600 text-lg'>
            Loading magical stories ...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50'>
      <div className='container mx-auto px-4 py-12'>

        <div className='text-center mb-12'>
          <div className='flex items-center justify-center space-x-3 mb-6'>
            <Stars className='w-8 h-8 text-yellow-500 animate-pulse' />
            <h1>{t('storyList')}</h1>
            <Sparkles className='w-8 h-8 text-yellow-500 animate-pulse' />
          </div>

          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {t('storyListSubtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {stories.map((story, index) => (
            <div
              key={story.slug}
              className='animate-fade-in'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoryList
