import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/navBar';
import { CartProvider } from './context/CartContext';

const categories = [
    { title: 'Exterior', id: 1 },
    { title: 'Interior', id: 2 },
    { title: 'A medida', id: 3 },
];

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar categories={categories} />
                <div id="App" style={{ padding: '5%' }}>
                    <Switch>
                        <Route exact path="/" component={ItemListContainer} />
                        <Route path="/category/:categoryId" component={ItemListContainer} />
                        <Route path="/item/:itemId" component={ItemDetailContainer} />
                    </Switch>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
