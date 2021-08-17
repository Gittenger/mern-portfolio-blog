import React, { useState } from 'react'

import ProjectsContext from './ProjectsContext.js'

export const ProjectsProvider = ({ children }) => {
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
      <ProjectsContext.Provider value={{ urls, setUrlCache }}>
         {children}
      </ProjectsContext.Provider>
   )
}

export default ProjectsProvider
