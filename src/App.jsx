import './App.css'
import HeronsFormula from './components/HeronsFormula'
import AmbiguousCase from './components/AmbiguousCase'
import NewtonsMethod from './components/NewtonsMethod'
import PolynomialFunction from './components/PolynomialFunction'

function App() {

    return (
        <div id="app-container">
            <HeronsFormula className="component" />
            <AmbiguousCase className="component" />
            <NewtonsMethod className="component" />
            <PolynomialFunction className="component" />
        </div>
    )
}

export default App