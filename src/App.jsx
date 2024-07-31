import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './page/home'
import CreateUser from './page/create'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/create-user' element={<CreateUser />} />
        </Route>
      </Routes>
      <div className="wrapper">
      </div>
    </Fragment>
  )
}

export default memo(App)