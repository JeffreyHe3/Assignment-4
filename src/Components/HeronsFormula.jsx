import { useState } from 'react'
import './style.css'

function HeronsFormula(props) {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [resultHeron, setResult] = useState("");

    function Heron(event) {
        event.preventDefault();

        if (a <= 0 || b <= 0 || c <= 0) {
            setResult("Not a valid triangle");
        } else {
            setResult(0.25 * (Math.sqrt(4 * a * a * b * b - (a * a + b * b - c * c) * (a * a + b * b - c * c))));
        }
    }

    return (
        <div className="container">
            <h1>{props.title}</h1>
            <form id="heron-form" onSubmit={event => { Heron(event) }}>
                <label htmlFor="sideAHeron">Side a:</label>
                <input type="number" step="0.01" id="sideAHeron" name="sideAHeron" value={a} onChange={event => { setA(Number(event.target.value)) }} required />
                <label htmlFor="sideBHeron">Side b:</label>
                <input type="number" step="0.01" id="sideBHeron" name="sideBHeron" value={b} onChange={event => { setB(Number(event.target.value)) }} required />
                <label htmlFor="sideCHeron">Side c:</label>
                <input type="number" step="0.01" id="sideCHeron" name="sideCHeron" value={c} onChange={event => { setC(Number(event.target.value)) }} required />
                <label htmlFor="resultHeron"> Area (Result):</label>
                <input className="result" type="text" id="resultHeron" name="resultHeron" value={resultHeron} readOnly />
                <input type="submit" value="Calculate" />
            </form>
        </div>
    );
}

export default HeronsFormula