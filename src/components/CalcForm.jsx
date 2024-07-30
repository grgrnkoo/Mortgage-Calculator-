import React from "react";
import { removeError } from "./validation";
import FormInput from "./FormInput";

export default function CalcForm(props) {
    const { amount, term, rate, type, getAmount, getTerm, getRate, getType, handleSubmit, clearAll } = props;

    return (
        <div className="calcForm">
            <div className="topLine">
                <h2>Mortgage Calculator</h2>
                <span className="clear" onClick={clearAll}>Clear All</span>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <FormInput
                    label='Mortgage Amount'
                    type='text'
                    name='amount'
                    id='amount'
                    spanTextLeft='£'
                    data={amount}
                    getAmount={getAmount}
                    removeError={removeError}
                />
                <div className="halfInputs">
                    <FormInput
                        label='Mortgage Term'
                        type='text'
                        name='term'
                        id='term'
                        spanTextRight='years'
                        data={term}
                        getAmount={getTerm}
                        removeError={removeError}
                    />
                    <FormInput
                        label='Interest Rate'
                        type='text'
                        name='rate'
                        id='rate'
                        spanTextRight='%'
                        data={rate}
                        getAmount={getRate}
                        removeError={removeError}
                    />
                </div>
                <div className="typeField">
                    <p className="typeSelect">Mortgage Type</p>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            id="type"
                            value="repayment"
                            checked={type === 'repayment'}
                            onChange={({ target }) => {
                                getType(target.value);
                                removeError(target.parentElement.parentElement);
                            }}
                        />
                        Repayment
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            id="type"
                            value="interest"
                            checked={type === 'interest'}
                            onChange={({ target }) => {
                                getType(target.value);
                                removeError(target.parentElement.parentElement);
                            }}
                        />
                        Interest Only
                    </label>
                </div>
                <button type="submit">
                    <img src="https://raw.githubusercontent.com/grgrnkoo/Mortgage-Calculator-/b9d18dbeb45b0e9eaf2c73e0038e3daab1a5b455/public/images/icon-calculator.svg" alt="" />
                    Calculate Repayments
                </button>
            </form>
        </div >
    );

}
