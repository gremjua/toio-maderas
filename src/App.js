import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import PageContainer from './containers/PageContainer';
import NavBar from './components/navBar';
import { CartProvider } from './context/CartContext';
import { ItemsProvider } from './context/ItemsContext';
import Cart from './components/cart';
import CheckOut from './components/checkOut';

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
                <ItemsProvider>
                    <PageContainer>
                        <Switch>
                            <Route exact path="/" component={ItemListContainer} />
                            <Route path="/category/:categoryId" component={ItemListContainer} />
                            <Route path="/item/:itemId" component={ItemDetailContainer} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/checkout" component={CheckOut} />
                        </Switch>
                    </PageContainer>
                </ItemsProvider>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
