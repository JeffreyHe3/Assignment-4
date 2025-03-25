import { useState } from 'react'
import './style.css'

function PolynomialFunction() {
    let [cPoly, setCPoly] = useState("");
    let [ePoly, setEPoly] = useState("");
    let [x, setX] = useState("");
    const [resultPoly1, setResult1] = useState("");
    const [resultPoly2, setResult2] = useState("");

    function Polynomial(event) {
        event.preventDefault();

        let arrayC = cPoly.split(" ");
        let arrayE = ePoly.split(" ");
        let output1 = "f(x) =";
        let output2 = "f(" + x + ") = ";
        let answer = 0;

        for (let i = 0; i < arrayC.length; i++) {
            if (i == 0) {
                if (parseFloat(arrayC[i]) == 1) {
                    output1 += " ";
                } else if (parseFloat(arrayC[i]) == -1) {
                    output1 += " -";
                } else if (parseFloat(arrayC[i]) < 0) {
                    output1 += " -" + arrayC[i].replace("-", "");
                } else {
                    output1 += " " + arrayC[i];
                }
                if (parseFloat(arrayE[i]) != 0) {
                    output1 += "x" + "^" + arrayE[i];
                }
            } else {
                if (parseFloat(arrayC[i]) == 1) {
                    output1 += " + ";
                } else if (parseFloat(arrayC[i]) == -1) {
                    output1 += " - ";
                } else if (parseFloat(arrayC[i]) < 0) {
                    output1 += " - " + arrayC[i].replace("-", "");
                } else {
                    output1 += " + " + arrayC[i];
                }
                if (parseFloat(arrayE[i]) != 0) {
                    output1 += "x" + "^" + arrayE[i];
                }
            }
        }
        setResult1(output1);

        for (let i = 0; i < arrayC.length; i++) {
            answer += parseFloat(arrayC[i]) * Math.pow(xValue, parseFloat(arrayE[i]));
        }
        output2 += answer;
        setResult2(output2);

    }
    return (
        <div className="container">
            <h1>Polynomial Function</h1>
            <form id="poly-form" onSubmit={(event) => { Polynomial(event) }}>
                <label htmlFor="cPoly">Coefficients:</label>
                <input type="text" id="cPoly" name="cPoly" value={cPoly} onChange={(event) => { setCPoly(String(event.target.value)) }} required />
                <label htmlFor="ePoly">Exponents:</label>
                <input type="text" id="ePoly" name="ePoly" value={ePoly} onChange={(event) => { setEPoly(String(event.target.value)) }} required />
                <label htmlFor="xPoly">x Value:</label>
                <input type="number" step="0.01" id="xPoly" name="xPoly" value={x} onChange={(event) => { setX(Number(event.target.value)) }} required />
                <label htmlFor="resultPoly1">Polynomial Function (Result):</label>
                <input className="result" type="text" id="resultPoly1" name="resultPoly1" value={resultPoly1} readOnly />
                <label htmlFor="resultPoly2">Polynomial Evaluation (Result):</label>
                <input className="result" type="text" id="resultPoly2" name="resultPoly2" value={resultPoly2} readOnly />
                <input type="submit" value="Calculate" />
            </form>

        </div>
    );
}
export default PolynomialFunction