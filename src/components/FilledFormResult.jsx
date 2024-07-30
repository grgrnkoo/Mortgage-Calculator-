import React from "react";

export default function FilledFormResult({ monthly, overpay }) {
    monthly = monthly.toFixed(2);
    overpay = overpay.toFixed(2);

    return (
        <div className="filledFormResult">
            <h3>Your results</h3>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments again."</p>
            <div className="calculations">
                <div className="monthlyRepayments">
                    <p>Your monthly repayments</p>
                    <span>{'£'+monthly}</span>
                </div>
                <div className="totalRepay">
                    <p>Total you'll repay over the term</p>
                    <span>{'£'+overpay}</span>
                </div>
            </div>
        </div>
    )
}