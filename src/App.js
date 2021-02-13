import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';

const navLinks = [
    { title: 'Exterior', path: '/exterior' },
    { title: 'Interior', path: '/interior' },
    { title: 'A medida', path: '/aMedida' },
];

function App() {
    return (
        <BrowserRouter>
            <NavBar navLinks={navLinks} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/cart">
                    <div className="App">
                        <ItemListContainer greeting="Hola!" />
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
