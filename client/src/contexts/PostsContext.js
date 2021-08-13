import { createContext } from 'react'

export const PostsContext = createContext({
  urls: {},
  setUrlCache: () => {},
})

export default PostsContext
