import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="Hola!" />
        </div>
    );
}

export default App;
