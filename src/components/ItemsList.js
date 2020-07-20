import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { useRouteMatch, Link } from 'react-router-dom'

export default function ItemsList(props) {
  const { items } = props

  // We'll grab the current URL using the hook
  // url tells us where we are (the URL in Chrome) so we don't have to type it all over
  // if we want to make Links or Routes...
  const { url } = useRouteMatch()

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <Link to={`${url}/${item.id}`}>
            <img
              className='items-list-image'
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          {/* Link ends */}

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
