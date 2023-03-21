import React, { useState } from 'react'
import '../styles/main.scss'
import Greeting from './Greeting'
import Images from './Images'
import Modal from './Modal'
import UploadForm from './UploadForm'

function Main() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <main className="main">
      <div className="main__container container">
        <div className="main__body">
          <Greeting />
          <UploadForm />
          <Images setSelectedImg={setSelectedImg}/>
          { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
        </div>
      </div>
    </main>
  )
}

export default Main