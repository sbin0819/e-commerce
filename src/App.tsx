import { useEffect } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { GlobalStyles } from './styles'
import { Header } from './components/common'
import Home from './page/home'
import Store from './page/store'

import Login from './page/login'
import Signup from './page/signup'
import Today from './page/today'

import Ready from './page/ready'

function App() {
  const { pathname } = useLocation()
  const showHeader = pathname !== '/login' && pathname !== '/signup'
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])
  return (
    <>
      <GlobalStyles />
      {showHeader && <Header />}
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/today/:slug" component={Today} />
      <Route exact path="/ready" component={Ready} />
    </>
  )
}

export default App
