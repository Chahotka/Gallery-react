import { useEffect, useState } from "react"
import { firestore, getDocs, query, limit, orderBy, collection, onSnapshot } from "../firebase/config"


function useFirestore(collectionName) {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const q = query(collection(firestore, 'images'), orderBy('createdAt'))
    const unsub = onSnapshot(q, (querySnapshot) => {
      const documents = []
      querySnapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
      })
      documents.reverse()
      setDocs(documents)
    })
  }, [collectionName])

  return { docs }
}

export default useFirestore