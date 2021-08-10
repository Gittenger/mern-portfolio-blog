import { createContext } from 'react'

export const PageContext = createContext({
  activePage: 'Home',
  setPage: () => {},
})

export default PageContext
