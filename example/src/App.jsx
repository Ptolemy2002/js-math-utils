import { useState } from "react";
import { clamp, wrapNumber } from "@ptolemy2002/js-math-utils";

function App() {
    const [number, setNumber] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [error, setError] = useState(null);

    function handleNumberChange(setter) {
        return (e) => {
            if (e.target.value === "") {
                setError(`Please enter a number for the input field ${e.target.name}`);
                return;
            } else if (isNaN(e.target.value)) {
                setError(`Please enter a valid number for the input field "${e.target.name}"`);
                return;
            } else {
                setError(null);
            }

            setter(parseFloat(e.target.value));
        }
    }

    return (
      <div className="App p-3">
            <div className="d-flex flex-row gap-2 mb-1">
                <label>Number:</label>
                <input className="flex-grow-1" type="number" name="number" defaultValue={number} onChange={handleNumberChange(setNumber)} />
            </div>

            <div className="d-flex flex-row gap-2 mb-1">
                <label>Min:</label>
                <input className="flex-grow-1" type="number" name="min" defaultValue={min} onChange={handleNumberChange(setMin)} />
            </div>

            <div className="d-flex flex-row gap-2 mb-1">
                <label>Max:</label>
                <input className="flex-grow-1" type="number" name="max" defaultValue={max} onChange={handleNumberChange(setMax)} />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            {
                !error && <div className="mt-3">
                    <p>Clamped number: {clamp(number, min, max)}</p>
                    <p>Wrapped number: {wrapNumber(number, min, max)}</p>
                </div>
            }
      </div>
    );
}

export default App;
