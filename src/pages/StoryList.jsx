import { useEffect } from 'react'
import StoryCard from '../components/StoryCard'
import { supabase } from '../services/supabase'

const StoryList = () => {

  useEffect(() => {
    const testFetch = async () => {
      const {data, error} = await supabase.from('stories').select('*')

      if (error) console.error('Supabase error:', error.message)
      else console.log('Fetched stories:', data[0])
    }
    testFetch()
  },[])

  return (
    <div>
    </div>
  )
}

export default StoryList
