"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(5);

  const principal = Number(amount);
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = years * 12;

  const monthlyPayment = principal
    ? (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
    : 0;

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;

  const formatCZK = (value: number) => {
    return new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section className="bg-[#f9fafb] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] font-raleway mb-4">
          Loan Calculator
        </h2>
        <p className="text-gray-600 text-lg font-raleway">
          Easily estimate your monthly payments, total cost, and interest for any loan in CZK.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl mx-auto space-y-6">
        {/* Inputs */}
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Amount (CZK)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>
        </div>

        {/* Results */}
        <div className="border-t pt-6 text-gray-800 text-base space-y-2 font-medium">
          <div className="flex justify-between">
            <span>Monthly Payment:</span>
            <span>{formatCZK(monthlyPayment)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Payment:</span>
            <span>{formatCZK(totalPayment)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Interest:</span>
            <span>{formatCZK(totalInterest)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
