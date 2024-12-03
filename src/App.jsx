import { lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Spam from './pages/Spam';
import Bin from './pages/Bin';
const Settings = lazy(() => import('./pages/Settings'));
import Mail from './pages/Mail';
import ComingSoon from './pages/ComingSoon';
import ComingSoon2 from './pages/ComingSoon2';
import ComingSoon3 from './pages/ComingSoon3';


function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="spam" element={<Spam />} />
          <Route path="bin" element={<Bin />} />
          <Route path="settings" element={<Settings />} />
          <Route path="mail" element={<Mail />} />
        </Route>
        <Route path="coming_soon" element={<ComingSoon />} />
        <Route path="coming_soon2" element={<ComingSoon2 />} />
        <Route path="coming_soon3" element={<ComingSoon3 />} />
      </Routes>
    </>
  )
}

export default App
