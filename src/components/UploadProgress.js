import React, { useEffect } from 'react'
import '../styles/uploadProgress.scss'
import useStorage from '../hooks/useStorage'

function UploadProgress({ file, setFile }) {
  const {url, progress} = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url])

  return (
    <div className='upload__progress'>
      <p className="upload__number">{progress}%</p>
      <div style={{width: progress + '%'}} className="upload__line"></div>
    </div>
  )
}

export default UploadProgress