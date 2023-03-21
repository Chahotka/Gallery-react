import React from 'react'
import '../styles/images.scss'
import useFirestore from '../hooks/useFirestore'


function Images({ setSelectedImg }) {
  const { docs } = useFirestore('images')

  return (
    <div className='main__images'>
      { docs.map(doc => {
        return (
          <div
            onClick={() => setSelectedImg(doc.url)}
            className="main__image-wrap" 
            key={doc.id}
          >
            <img className='main__image' src={doc.url} alt="" />
          </div>
        )
      }) }
    </div>
  )
}

export default Images