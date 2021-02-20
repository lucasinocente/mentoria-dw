import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Posts =  () => {
  const router = useRouter()
  const { id } = router.query;
  const [response, setResponse] = useState();

  useEffect(async () => {
    const responseFromApi = await axios.get(`/api/posts/${id}`)
    setResponse(responseFromApi.data.post)
  }, [id])

  return (
    <>
      {
        response && (
          <h1>{response.titulo}</h1>
        )
      }
    </>
  )
}

export default Posts;