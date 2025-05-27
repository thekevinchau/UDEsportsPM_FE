import React from "react";

interface PricingTierProps {
  props: {
    title: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
    isHighlighted: boolean;
  };
}

export default function PricingCard({ props }: PricingTierProps) {
  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-2xl border shadow-md transition-transform hover:-translate-y-1 duration-200
        ${props.isHighlighted
          ? "bg-blue-50 border-blue-600"
          : "bg-white border-gray-200"
        }
      `}
      style={{ minHeight: "560px", width: "100%", maxWidth: "340px" }}
    >
      <div>
        <h3 className="text-2xl font-bold text-black mb-1">{props.title}</h3>
        <p className="text-gray-600 mb-4">{props.description}</p>

        <div className="text-4xl font-extrabold text-black mb-6">
          ${props.price}
          <span className="text-base font-medium">/mo</span>
        </div>

        <ul className="space-y-3 text-sm text-black">
          {props.features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          className={`w-full py-2 text-lg font-semibold rounded-lg transition
            ${props.isHighlighted
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
        >
          {props.cta}
        </button>
      </div>
    </div>
  );
}
