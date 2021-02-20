// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const posts = {
  '123': {
    titulo: 'Um dois tres'
  },
  'hello': {
    titulo: 'Hello Mentoria!'
  }
}

export default (req, res) => {
  const {
    query: { id }
  } = req

  const post = posts[id]

  res.status(200).json(
    {
      post
    }
  )
}
