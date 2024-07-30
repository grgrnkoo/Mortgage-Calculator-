import React, { useState } from "react";
import { removeError } from "./validation";

export default function FormInput(props) {
    const [invalid, setInvalid] = useState(false);

    const checkDigit = (target) => {
        if (isNaN(Number(target.value))) {
            setInvalid(true);
            target.parentElement.classList.add('error');
        } else {
            setInvalid(false);
            props.getAmount(target.value);
        }
    }

    return (
        <>
            <label>
                {props.label}
                <div className={invalid ? 'error inputWrapper' : 'inputWrapper'}>
                    {props.spanTextLeft && <span className="inputIcon">{props.spanTextLeft}</span>}
                    <input
                        type={props.type}
                        name={props.name}
                        id={props.id}
                        value={props.data}
                        onChange={({ target }) => {
                            checkDigit(target)
                        }}
                        onFocus={({ target }) => removeError(target.parentElement)}
                    />
                    {props.spanTextRight && <span className="inputIcon">{props.spanTextRight}</span>}
                </div>
                {invalid && <span className="errorTextNode">Only digits and '.' accepted</span>}
            </label>
        </>
    )
}