import React, { useState } from 'react'
import '../styles/uploadFrom.scss'
import UploadProgress from './UploadProgress'

function UploadForm() {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const fileType = ['image/jpeg', 'image/png']

  const uploadHandler = (e) => {
    e.preventDefault()
    const selected = e.target.files[0]

    if (selected && fileType.includes(selected.type)) {
      setFile(selected)
      setError(null)
    } else {
      setFile(null)
      setError('choose an image(.jpeg or .png)')
    }
  }
  
  return (
    <section className="upload">
      <div className="upload__body">
        <form className='upload__form'>
          <label className='upload__label' htmlFor="upload">+</label>
          <input id='upload' className='upload__input' type="file" onChange={uploadHandler}/>
        </form>
      </div>
      { file && <UploadProgress file={file} setFile={setFile} />}
    </section>
  )
}

export default UploadForm