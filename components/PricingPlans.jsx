import React from "react";
import { pricingPlans } from "./data";

const PricingPlans = () => {
  return (
    <div className="relative">
      {/*Background decoration */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1"></div>
        <div className="bg-slate-50 flex-1"></div>
      </div>
      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="border border-slate-200 p-8 shadow-lg bg-white rounded-2xl relative flex flex-col"
          >
            <h3 className="text-lg font-semibold leading-5 ">{plan.title}</h3>
            {plan.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md rounded-full">
                Most Popular
              </p>
            )}
            <p className="mt-4 text-slate-700 leading-6 ">{plan.description}</p>
            <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-500 flex items-center">
                <span>{plan.currency}</span>
                <span className="text-4xl text-slate-900 ml-3">
                  {plan.price}
                </span>
                <span className="ml-1.5">{plan.frequency}</span>
              </p>
            </div>
            {/*features */}
            <ul className="mt-6 space-y-4 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm leading-6 text-slate-700 flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-500 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
            {/*Call to action */}
            <a
              href="#"
              className={`mt-8 block rounded-lg  px-6 py-4 text-center text-sm font-semibold leading-4   ${
                plan.mostPopular
                  ? "text-white shadow-md bg-cyan-500 hover:bg-cyan-600"
                  : "text-cyan-700 bg-cyan-50 hover:bg-cyan-100"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
