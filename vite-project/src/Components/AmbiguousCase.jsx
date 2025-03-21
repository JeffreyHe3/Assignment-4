import { useState } from 'react'
import './style.css'

function AmbiguousCase() {
    const [angle, setAngle] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [resultAmb, setResult] = useState("");

    function Ambiguous(event) {
        event.preventDefault();

        if (angle <= 0 || a <= 0 || b <= 0) {
            setResult("Invalid input");
        } else {
            const h = b * Math.sin(angle * (Math.PI / 180));

            if (angle < 90) {   
                if (a < h) {
                    setResult("No triangle");
                } else if (a == h) {
                    setResult("Right triangle");
                } else if (a > b) {
                    setResult("One triangle");
                } else if (h < a < b) {
                    setResult("Two triangles (ambiguous case)");
                }
            } else {
                if (a >= b) {
                    setResult("One triangle");
                } else {
                    setResult("No triangle");
                }
            }
        }
    }

    return (
        <div className="container">
            <h1>Ambiguous Case</h1>
            <form id="amb-form" onSubmit={(event) => { Ambiguous(event) }}>
                <label htmlFor="angleAAmb">Angle A (&deg;):</label>
                <input type="number" id="angleAAmb" name="angleAAmb" value={angle} onChange={(event) => { setAngle(Number(event.target.value)) }} required />
                <label htmlFor="sideAAmb">Side a:</label>
                <input type="number" id="sideAAmb" name="sideAAmb" value={a} onChange={(event) => { setA(Number(event.target.value)) }} required />
                <label htmlFor="sideBAmb">Side b:</label>
                <input type="number" id="sideBAmb" name="sideBAmb" value={b} onChange={(event) => { setB(Number(event.target.value)) }} required />
                <label htmlFor="resultAmb">Triangle type (Result):</label>
                <input className="result" type="text" id="resultAmb" name="resultAmb" value={resultAmb} readOnly />
                <input type="submit" value="Calculate" />
            </form>
        </div>
    );
}
export default AmbiguousCase