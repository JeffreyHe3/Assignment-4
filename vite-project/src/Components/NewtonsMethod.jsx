import { useState } from 'react'
import './style.css'

function NewtonsMethod() {
    const [root, setRoot] = useState("");
    const [resultNewton, setResult] = useState("");

    function Newton(event) {
        event.preventDefault();
        
        function functionUsed(x) {
            return (6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6);
        }
        function derUsed(x) {
            return (24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7);
        }

        const rootApprox = root - (functionUsed(root) / derUsed(root));

        setResult(rootApprox);
    }

    return (
        <div className="container">
            <h1>Newton's Method</h1>
            <form id="newton-form" onSubmit={(event) => { Newton(event) }}>
                <label htmlFor="rootGuessNewton">Root Guess:</label>
                <input type="number" id="rootGuessNewton" name="rootGuessNewton" value={root} onChange={(event) => { setRoot(Number(event.target.value)) }} required />
                <label htmlFor="resultNewton">Root Approximation (Result):</label>
                <input className="result" type="text" id="resultNewton" name="resultNewton" value={resultNewton} readOnly />
                <input type="submit" value="Calculate" />
            </form>
        </div>
    );
}
export default NewtonsMethod