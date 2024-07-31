import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './page/home'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <div className="wrapper">
      </div>
    </Fragment>
  )
}

export default memo(App)