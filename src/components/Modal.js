import React from 'react'
import '../styles/modal.scss'

function Modal({ selectedImg, setSelectedImg }) {
  const backdropHandler = (e) => {
    if (e.target.classList.contains('main__backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <div 
      className="main__backdrop"
      onClick={backdropHandler}
    >
      <img className='main__backdrop-img' src={selectedImg} alt="" />
    </div>
  )
}

export default Modal