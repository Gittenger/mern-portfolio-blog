import React, { useState } from 'react'

import PageContext from './PageContext.js'

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('')
  const setPage = (page) => setActivePage(page)

  return (
    <PageContext.Provider value={{ activePage, setPage }}>
      {children}
    </PageContext.Provider>
  )
}

export default PageProvider
