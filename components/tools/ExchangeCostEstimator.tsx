"use client";

import { useState } from "react";
import { DollarSign } from "lucide-react";

export default function ExchangeCostEstimator() {
  const [propertyValue, setPropertyValue] = useState<string>("");
  const [qiFeePercentage, setQiFeePercentage] = useState<string>("1.0");
  const [escrowFee, setEscrowFee] = useState<string>("500");
  const [titleInsuranceRate, setTitleInsuranceRate] = useState<string>("0.5");
  const [recordingFees, setRecordingFees] = useState<string>("200");

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const parseNumber = (value: string): number => {
    const parsed = parseFloat(value.replace(/[^0-9.-]/g, ""));
    return isNaN(parsed) ? 0 : parsed;
  };

  const calculateCosts = () => {
    const propVal = parseNumber(propertyValue);
    const qiPercent = parseNumber(qiFeePercentage);
    const escrow = parseNumber(escrowFee);
    const titleRate = parseNumber(titleInsuranceRate);
    const recording = parseNumber(recordingFees);

    const qiFee = propVal * (qiPercent / 100);
    const titleInsurance = propVal * (titleRate / 100);
    const totalCosts = qiFee + escrow + titleInsurance + recording;

    return {
      qiFee,
      escrowFee: escrow,
      titleInsurance,
      recordingFees: recording,
      totalCosts,
      hasData: propVal > 0,
    };
  };

  const results = calculateCosts();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <DollarSign className="h-6 w-6 text-[#003366]" />
        <h2 className="text-2xl font-semibold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Exchange Cost Estimator
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="property-value"
              className="block text-sm font-semibold text-[#003366]"
            >
              Property Value
            </label>
            <input
              id="property-value"
              type="text"
              value={propertyValue}
              onChange={(e) => setPropertyValue(e.target.value)}
              placeholder="$500,000"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Estimated value of the property involved in the exchange
            </p>
          </div>

          <div>
            <label
              htmlFor="qi-fee"
              className="block text-sm font-semibold text-[#003366]"
            >
              QI Fee Percentage (%)
            </label>
            <input
              id="qi-fee"
              type="text"
              value={qiFeePercentage}
              onChange={(e) => setQiFeePercentage(e.target.value)}
              placeholder="1.0"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Qualified Intermediary fee as percentage of property value (typically 0.5% - 2%)
            </p>
          </div>

          <div>
            <label
              htmlFor="escrow-fee"
              className="block text-sm font-semibold text-[#003366]"
            >
              Escrow Fee
            </label>
            <input
              id="escrow-fee"
              type="text"
              value={escrowFee}
              onChange={(e) => setEscrowFee(e.target.value)}
              placeholder="$500"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Escrow handling fee (typically $300 - $1,000)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="title-insurance-rate"
              className="block text-sm font-semibold text-[#003366]"
            >
              Title Insurance Rate (%)
            </label>
            <input
              id="title-insurance-rate"
              type="text"
              value={titleInsuranceRate}
              onChange={(e) => setTitleInsuranceRate(e.target.value)}
              placeholder="0.5"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Title insurance premium rate (typically 0.3% - 0.8% of property value)
            </p>
          </div>

          <div>
            <label
              htmlFor="recording-fees"
              className="block text-sm font-semibold text-[#003366]"
            >
              Recording Fees
            </label>
            <input
              id="recording-fees"
              type="text"
              value={recordingFees}
              onChange={(e) => setRecordingFees(e.target.value)}
              placeholder="$200"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              County recording fees (varies by county in Florida)
            </p>
          </div>
        </div>
      </div>

      {results.hasData && (
        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Estimated Exchange Costs
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-[#1F2937]">QI Fee:</span>
              <span className="text-sm font-semibold text-[#003366]">
                {formatCurrency(results.qiFee)}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-[#1F2937]">Escrow Fee:</span>
              <span className="text-sm font-semibold text-[#003366]">
                {formatCurrency(results.escrowFee)}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-[#1F2937]">Title Insurance:</span>
              <span className="text-sm font-semibold text-[#003366]">
                {formatCurrency(results.titleInsurance)}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-[#1F2937]">Recording Fees:</span>
              <span className="text-sm font-semibold text-[#003366]">
                {formatCurrency(results.recordingFees)}
              </span>
            </div>
            <div className="flex justify-between border-t-2 border-[#003366] pt-2">
              <span className="text-base font-semibold text-[#003366]">Total Estimated Costs:</span>
              <span className="text-base font-bold text-[#003366]">
                {formatCurrency(results.totalCosts)}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h4 className="mb-2 text-sm font-semibold text-[#003366]">Cost Breakdown</h4>
        <ul className="space-y-1 text-xs text-gray-700">
          <li>
            <strong>QI Fee:</strong> Fee charged by the Qualified Intermediary to facilitate the
            exchange. Typically ranges from 0.5% to 2% of property value.
          </li>
          <li>
            <strong>Escrow Fee:</strong> Fee for escrow services. Usually a flat fee between $300
            and $1,000.
          </li>
          <li>
            <strong>Title Insurance:</strong> Premium for title insurance coverage. Rates vary by
            property value and location, typically 0.3% to 0.8% of property value.
          </li>
          <li>
            <strong>Recording Fees:</strong> County fees for recording the deed. Varies by county
            in Florida, typically $100 - $500.
          </li>
          <li className="mt-2 pt-2 border-t border-gray-200">
            <strong>Note:</strong> Florida does not impose a state real estate transfer tax.
            Additional costs may include lender fees, survey costs, and property inspections.
          </li>
        </ul>
      </div>
    </div>
  );
}

