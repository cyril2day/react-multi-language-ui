const LoadingScreen = ({ message }) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4' />
        <p className='text-gray-600 text-lg'>
          {message}
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen
