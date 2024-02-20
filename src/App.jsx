import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserLayout from './components/layout/UserLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CaseStudy1 from './pages/CaseStudy1.jsx'
import CaseStudy2 from './pages/CaseStudy2.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<UserLayout />} >
          <Route index element = {<LandingPage />} />
          <Route path="/casestudy1" element={<CaseStudy1/>} />
          <Route path="/casestudy2" element={<CaseStudy2/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
