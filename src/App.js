import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import NavHeader from './Components/NavHeader';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div>
      <NavHeader/>
      <main>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />  
        </Route>  
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/product" exact>
          <Products></Products>
        </Route>
        <Route path='/products/:productID'>
          <ProductDetail/>
        </Route>
      </Switch>
      </main>
      
    </div>
  );
}

export default App;
