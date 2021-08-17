import { createContext } from 'react'

export const ProjectsContext = createContext({
  urls: {},
  setUrlCache: () => {},
})

export default ProjectsContext
