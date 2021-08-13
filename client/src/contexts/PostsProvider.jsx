import React, { useState } from 'react'

import PostsContext from './PostsContext.js'

export const PostsProvider = ({ children }) => {
   const [urls, setUrls] = useState({})
   const setUrlCache = (url, apiData) => {
      if (!urls[url]) {
         setUrls({
            ...urls,
            [url]: apiData,
         })
      }
   }

   return (
      <PostsContext.Provider value={{ urls, setUrlCache }}>
         {children}
      </PostsContext.Provider>
   )
}

export default PostsProvider
