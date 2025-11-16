"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export default function IdentificationRulesChecker() {
  const [numProperties, setNumProperties] = useState<string>("");
  const [totalIdentifiedValue, setTotalIdentifiedValue] = useState<string>("");
  const [relinquishedValue, setRelinquishedValue] = useState<string>("");

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

  const checkRules = () => {
    const numProps = parseInt(numProperties) || 0;
    const totalValue = parseNumber(totalIdentifiedValue);
    const relValue = parseNumber(relinquishedValue);

    const threePropertyRule = numProps <= 3;
    const twoHundredPercentRule = totalValue <= relValue * 2;
    const ninetyFivePercentRule = relValue > 0 && totalValue >= relValue * 0.95;

    const allRulesMet = threePropertyRule && (twoHundredPercentRule || ninetyFivePercentRule);

    return {
      threePropertyRule,
      twoHundredPercentRule,
      ninetyFivePercentRule,
      allRulesMet,
      hasData: numProps > 0 && totalValue > 0 && relValue > 0,
      numProps,
      totalValue,
      relValue,
    };
  };

  const results = checkRules();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <CheckCircle2 className="h-6 w-6 text-[#003366]" />
        <h2 className="text-2xl font-semibold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Identification Rules Checker
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="num-properties"
              className="block text-sm font-semibold text-[#003366]"
            >
              Number of Properties Identified
            </label>
            <input
              id="num-properties"
              type="number"
              min="1"
              value={numProperties}
              onChange={(e) => setNumProperties(e.target.value)}
              placeholder="3"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Total number of replacement properties you plan to identify
            </p>
          </div>

          <div>
            <label
              htmlFor="total-identified-value"
              className="block text-sm font-semibold text-[#003366]"
            >
              Total Value of Identified Properties
            </label>
            <input
              id="total-identified-value"
              type="text"
              value={totalIdentifiedValue}
              onChange={(e) => setTotalIdentifiedValue(e.target.value)}
              placeholder="$1,000,000"
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-[#1F2937] focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366] focus:ring-offset-2"
            />
            <p className="mt-1 text-xs text-gray-600">
              Combined purchase price of all identified replacement properties
            </p>
          </div>
        </div>

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
        </div>
      </div>

      {results.hasData && (
        <div className="mt-8 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#003366]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Rule Validation Results
            </h3>
            <div className="space-y-4">
              <div
                className={`rounded-lg border-2 p-4 ${
                  results.threePropertyRule
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  {results.threePropertyRule ? (
                    <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-700 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#003366] mb-1">3-Property Rule</h4>
                    <p className="text-sm text-gray-700">
                      {results.threePropertyRule
                        ? `✓ You identified ${results.numProps} property/properties. The 3-property rule allows up to 3 properties.`
                        : `✗ You identified ${results.numProps} properties. The 3-property rule only allows up to 3 properties.`}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-lg border-2 p-4 ${
                  results.twoHundredPercentRule
                    ? "border-green-200 bg-green-50"
                    : "border-yellow-200 bg-yellow-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  {results.twoHundredPercentRule ? (
                    <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-700 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#003366] mb-1">200% Rule</h4>
                    <p className="text-sm text-gray-700">
                      {results.twoHundredPercentRule
                        ? `✓ Total identified value (${formatCurrency(results.totalValue)}) is within 200% of relinquished value (${formatCurrency(results.relValue)}).`
                        : `⚠ Total identified value (${formatCurrency(results.totalValue)}) exceeds 200% of relinquished value (${formatCurrency(results.relValue)}). You must acquire at least 95% of the identified value.`}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-lg border-2 p-4 ${
                  results.ninetyFivePercentRule
                    ? "border-green-200 bg-green-50"
                    : results.twoHundredPercentRule
                      ? "border-gray-200 bg-gray-50"
                      : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  {results.ninetyFivePercentRule ? (
                    <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5" />
                  ) : results.twoHundredPercentRule ? (
                    <AlertCircle className="h-5 w-5 text-gray-500 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-700 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#003366] mb-1">95% Rule</h4>
                    <p className="text-sm text-gray-700">
                      {results.ninetyFivePercentRule
                        ? `✓ Total identified value (${formatCurrency(results.totalValue)}) meets the 95% rule. You must acquire at least ${formatCurrency(results.relValue * 0.95)}.`
                        : results.twoHundredPercentRule
                          ? `If you exceed the 200% rule, you must acquire at least 95% of the identified value (${formatCurrency(results.totalValue * 0.95)}).`
                          : `✗ Total identified value (${formatCurrency(results.totalValue)}) does not meet the 95% rule. You must acquire at least ${formatCurrency(results.relValue * 0.95)}.`}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-lg border-2 p-4 ${
                  results.allRulesMet
                    ? "border-green-300 bg-green-100"
                    : "border-red-300 bg-red-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  {results.allRulesMet ? (
                    <CheckCircle2 className="h-6 w-6 text-green-700" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-700" />
                  )}
                  <div>
                    <h4 className="font-bold text-[#003366]">
                      {results.allRulesMet
                        ? "All Identification Rules Met"
                        : "Identification Rules Not Met"}
                    </h4>
                    <p className="mt-1 text-sm text-gray-700">
                      {results.allRulesMet
                        ? "Your identification appears to comply with IRS rules. Consult with your Qualified Intermediary to confirm."
                        : "Your identification may not comply with IRS rules. Consult with your Qualified Intermediary immediately."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h4 className="mb-2 text-sm font-semibold text-[#003366]">Understanding the Rules</h4>
        <ul className="space-y-2 text-xs text-gray-700">
          <li>
            <strong>3-Property Rule:</strong> You can identify up to 3 replacement properties of any
            value. If you identify more than 3 properties, you must meet the 200% or 95% rule.
          </li>
          <li>
            <strong>200% Rule:</strong> You can identify any number of replacement properties as
            long as their total value does not exceed 200% of the relinquished property value.
          </li>
          <li>
            <strong>95% Rule:</strong> If you exceed the 200% rule, you must acquire at least 95%
            of the total value of all identified properties. This rule applies when you identify
            more than 3 properties or exceed 200% of the relinquished value.
          </li>
          <li className="mt-2 pt-2 border-t border-gray-200">
            <strong>Important:</strong> You must identify replacement properties in writing within
            45 days of selling your relinquished property. The identification must be delivered to
            your Qualified Intermediary.
          </li>
        </ul>
      </div>
    </div>
  );
}

