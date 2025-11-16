"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function BootCalculator() {
  const [relinquishedValue, setRelinquishedValue] = useState<string>("");
  const [replacementValue, setReplacementValue] = useState<string>("");
  const [cashReceived, setCashReceived] = useState<string>("");
  const [oldMortgage, setOldMortgage] = useState<string>("");
  const [newMortgage, setNewMortgage] = useState<string>("");

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

  const calculateBoot = () => {
    const relVal = parseNumber(relinquishedValue);
    const repVal = parseNumber(replacementValue);
    const cash = parseNumber(cashReceived);
    const oldMort = parseNumber(oldMortgage);
    const newMort = parseNumber(newMortgage);

    const mortgageBoot = Math.max(0, oldMort - newMort);
    const cashBoot = cash;
    const totalBoot = cashBoot + mortgageBoot;

    // Estimated tax calculation (illustrative rate - actual rate depends on tax bracket)
    const estimatedTaxRate = 0.20; // 20% illustrative rate
    const estimatedTax = totalBoot * estimatedTaxRate;

    return {
      cashBoot,
      mortgageBoot,
      totalBoot,
      estimatedTax,
      hasBoot: totalBoot > 0,
    };
  };

  const results = calculateBoot();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <Calculator className="h-6 w-6 text-[#003366]" />
        <h2 className="text-2xl font-semibold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Boot Calculator
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="relinquished-value"
              className="block text-sm font-semibold text-[#003366]"
            >
              Relinquished Property Value
            </label>
            <input
              id="relinquished-value"
              type="text"
              value={relinquishedValue}
              onChange={(e) => setRelinquishedValue(e.target.value)}
              placeholder="$500,000"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Sale price of the property you are selling
            </p>
          </div>

          <div>
            <label
              htmlFor="replacement-value"
              className="block text-sm font-semibold text-[#003366]"
            >
              Replacement Property Value
            </label>
            <input
              id="replacement-value"
              type="text"
              value={replacementValue}
              onChange={(e) => setReplacementValue(e.target.value)}
              placeholder="$600,000"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Purchase price of the replacement property
            </p>
          </div>

          <div>
            <label
              htmlFor="cash-received"
              className="block text-sm font-semibold text-[#003366]"
            >
              Cash Received
            </label>
            <input
              id="cash-received"
              type="text"
              value={cashReceived}
              onChange={(e) => setCashReceived(e.target.value)}
              placeholder="$0"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Any cash received from the exchange
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="old-mortgage"
              className="block text-sm font-semibold text-[#003366]"
            >
              Old Mortgage Balance
            </label>
            <input
              id="old-mortgage"
              type="text"
              value={oldMortgage}
              onChange={(e) => setOldMortgage(e.target.value)}
              placeholder="$300,000"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Outstanding mortgage on relinquished property
            </p>
          </div>

          <div>
            <label
              htmlFor="new-mortgage"
              className="block text-sm font-semibold text-[#003366]"
            >
              New Mortgage Balance
            </label>
            <input
              id="new-mortgage"
              type="text"
              value={newMortgage}
              onChange={(e) => setNewMortgage(e.target.value)}
              placeholder="$400,000"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              New mortgage on replacement property
            </p>
          </div>
        </div>
      </div>

      {(parseNumber(relinquishedValue) > 0 ||
        parseNumber(replacementValue) > 0 ||
        parseNumber(cashReceived) > 0 ||
        parseNumber(oldMortgage) > 0 ||
        parseNumber(newMortgage) > 0) && (
        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-semibold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Calculation Results
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-[#1F2937]">Cash Boot:</span>
              <span className="text-sm font-semibold text-[#003366]">
                {formatCurrency(results.cashBoot)}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-sm font-medium text-[#1F2937]">Mortgage Boot:</span>
              <span className="text-sm font-semibold text-[#003366]">
                {formatCurrency(results.mortgageBoot)}
              </span>
            </div>
            <div className="flex justify-between border-t-2 border-[#003366] pt-2">
              <span className="text-base font-semibold text-[#003366]">Total Boot:</span>
              <span className="text-base font-bold text-[#003366]">
                {formatCurrency(results.totalBoot)}
              </span>
            </div>
            {results.hasBoot && (
              <div className="mt-4 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                <p className="text-sm font-semibold text-yellow-900 mb-2">
                  Estimated Tax on Boot (Illustrative):
                </p>
                <p className="text-lg font-bold text-yellow-900">
                  {formatCurrency(results.estimatedTax)}
                </p>
                <p className="mt-2 text-xs text-yellow-800">
                  Based on illustrative 20% rate. Actual tax rate depends on your tax bracket and
                  other factors.
                </p>
              </div>
            )}
            {!results.hasBoot && (
              <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-4">
                <p className="text-sm font-semibold text-green-900">
                  No boot detected. All gain may be deferred if other requirements are met.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h4 className="mb-2 text-sm font-semibold text-[#003366]">Understanding Boot</h4>
        <ul className="space-y-1 text-xs text-gray-700">
          <li>
            <strong>Cash Boot:</strong> Any cash received in the exchange is taxable boot.
          </li>
          <li>
            <strong>Mortgage Boot:</strong> If your new mortgage is less than your old mortgage,
            the difference is considered mortgage relief boot and may be taxable.
          </li>
          <li>
            <strong>Total Boot:</strong> The sum of cash boot and mortgage boot. This amount may
            be subject to capital gains tax.
          </li>
        </ul>
      </div>
    </div>
  );
}

