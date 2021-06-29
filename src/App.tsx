import { Route } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { Header } from './components/common';
import Home from './page/home';
import Login from './page/login';
import Signup from './page/signup';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </>
  );
}

export default App;
