import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import StoryList from './pages/StoryList'
import StoryDetail from './pages/StoryDetail'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className='min-h-screen flex flex-col'>
          <Header />

          <main className='flex-grow'>
            <Routes>
              <Route
                path='/'
                element={<StoryList />}
              />
              <Route
                path='/story/:slug'
                element={<StoryDetail />}
              />
              <Route
                path='*'
                element={<NotFound />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
