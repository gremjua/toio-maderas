import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/navBar';

const categories = [
    { title: 'Exterior', id: 1 },
    { title: 'Interior', id: 2 },
    { title: 'A medida', id: 3 },
];

function App() {
    return (
        <BrowserRouter>
            <NavBar categories={categories} />
            <div id="App" style={{ padding: '5%' }}>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:itemId">
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
