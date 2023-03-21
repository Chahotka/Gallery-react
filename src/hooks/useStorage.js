import React, { useState, useEffect } from 'react'
import {storage, ref, uploadBytesResumable, getDownloadURL, firestore, collection, addDoc, timestamp } from '../firebase/config'

function useStorage(file) {
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const storageRef = ref(storage, file.name)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot) => {
      const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(progress)
    }, (error) => {
      setError(error)
    }, async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref)
      setUrl(url)
      addDoc(collection(firestore, 'images'), {
        url, 
        createdAt: timestamp()
      })
    })
  }, [file])
  
  return {url, error, progress}
}

export default useStorage