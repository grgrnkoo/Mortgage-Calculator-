import React from "react";

export default function EmptyFormResult() {
    return (
        <div className="emptyFormResult">
            <img src="../../public/images/illustration-empty.svg" alt="Calculator Art.Waiting for data" />
            <h3>Results shown here</h3>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
    )
}