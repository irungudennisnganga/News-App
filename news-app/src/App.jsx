import { lazy } from 'react'

import './App.css'
const UnderConstruction =lazy(() => import('./UnderConstruction'))

function App() {
  

  return (
    <>
     <UnderConstruction />
    </>
  )
}

export default App
