import React from "react";
import EmptyFormResult from "./EmptyFormResult";
import FilledFormResult from "./FilledFormResult";

export default function CalcResult(props) {
    const {validated, monthly, overpay} = props;
    return (
        <div className="calcResult">
            {validated ?
            <FilledFormResult 
                monthly={monthly}
                overpay={overpay}
            /> :
            <EmptyFormResult />
            }
        </div>
    );
}