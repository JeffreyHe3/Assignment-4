import './App.css'
import HeronsFormula from './components/HeronsFormula'
import AmbiguousCase from './components/AmbiguousCase'
import NewtonsMethod from './components/NewtonsMethod'
import PolynomialFunction from './components/PolynomialFunction'

function App() {

    return (
        <div id="app-container">
            <HeronsFormula title={"Heron's Formula"}/>
            <AmbiguousCase title={"Ambiguous Case"}/>
            <NewtonsMethod title={"Newton's Method"}/>
            <PolynomialFunction title={"Polynomial Function"}/>
        </div>
    )
}

export default App