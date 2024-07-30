import React, { useEffect, useState } from 'react';
import './App.css';
import CalcForm from './components/CalcForm';
import CalcResult from './components/CalcResult';
import { validation } from './components/validation';

function App() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('');

  const [validated, setValidated] = useState(false);
  const [monthly, setMonthly] = useState(0);
  const [overpay, setOverpay] = useState(0);

  const getAmount = (value) => {
    setAmount(value);
  }

  const getTerm = (value) => {
    setTerm(value);
  }

  const getRate = (value) => {
    setRate(value);
  }

  const getType = (value) => {
    setType(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation(amount, term, rate, type)) {
      setValidated(true);
      setMonthly(calculateMonthly(amount, term, rate, type));
      setOverpay(calculateOverpay(amount, term, rate, type));
    };
  }

  const calculateMonthly = (amount, term, rate, type) => {
    amount = Number(amount);
    term = Number(term);
    rate = Number(rate);

    const monthlyRate = rate / 100 / 12;

    const totalPayments = term * 12;
    if (type === 'repayment') {
      return amount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else if (type === 'interest') {
      return amount * monthlyRate;
    }
  }

  const calculateOverpay = (amount, term, rate, type) => {
    amount = Number(amount);
    term = Number(term);
    rate = Number(rate);

    const monthlyPayment = calculateMonthly(amount, term, rate, type);
    const totalPayments = term * 12;

    if (type === 'repayment') {
      const totalAmountPaid = monthlyPayment * totalPayments;
      return totalAmountPaid ;
    } else if (type === 'interest') {
      return monthlyPayment * totalPayments;
    }
  }

  const clearAll = () => {
    setAmount('');
    setTerm('');
    setRate('');
    setType('');
    setValidated(false);
  }

  return (
    <>
      <CalcForm
        amount={amount}
        term={term}
        rate={rate}
        type={type}
        getAmount={getAmount}
        getTerm={getTerm}
        getRate={getRate}
        getType={getType}
        handleSubmit={handleSubmit}
        clearAll={clearAll}
      />
      <CalcResult 
        validated={validated}
        monthly={monthly}
        overpay={overpay}
        // calculateOverpay={calculateOverpay}
        // calculateMonthly={calculateMonthly}
      />
    </>
  )
}

export default App
