import React, { useState } from 'react'

import SkillsContext from './SkillsContext.js'

export const SkillsProvider = ({ children }) => {
   const [skillsUrls, setSkills] = useState([])
   const setSkillsContext = (url, skillsFromConsumer) => {
      setSkills({ ...skillsUrls, [url]: skillsFromConsumer })
   }

   return (
      <SkillsContext.Provider value={{ skillsUrls, setSkillsContext }}>
         {children}
      </SkillsContext.Provider>
   )
}

export default SkillsProvider
