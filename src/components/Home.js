import React from 'react'
// We'll need React Router's own version of the History API

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list <Link to='/items-list' />

  const routeToShop = () => {
    // WHY?????
    // PERHAPS the link shouldn't work unless the user is authed
    // we need a React Router equivalent of history.pushState
    // history.pushState(null, null, '/items-list') NOT GONNA WORK
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}
