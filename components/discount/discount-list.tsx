"use client";

import React, { useEffect, useState } from "react";

import { DiscountItem } from "./discount-item";

import { getDiscounts } from "@/lib/api/discounts";

export const DiscountList: React.FC = () => {
  const [discounts, setDiscounts] = useState<any[]>([]);
  const [status, setStatus] = useState<string>("Active");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setError("");
    getDiscounts(status)
      .then((data) => {
        setDiscounts(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load discounts");
        setLoading(false);
      });
  }, [status]);

  return (
    <section className="w-full max-w-4xl mx-auto px-5 py-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-black">Discount</h1>

        <nav className="w-full">
          <div className="flex flex-wrap gap-2.5">
            <button
              className={`flex justify-center items-center px-3.5 py-2 rounded-full transition-colors ${status === "Active" ? "bg-amber-400 border-amber-200 border-solid border-[1.534px] hover:bg-amber-300" : "border-solid border-[0.767px] border-stone-300 hover:bg-gray-50"}`}
              onClick={() => setStatus("Active")}
            >
              <span className="text-xs font-medium text-black whitespace-nowrap">
                Active
              </span>
            </button>
            <button
              className={`flex justify-center items-center px-3.5 py-2 rounded-full transition-colors ${status === "Expired" ? "bg-amber-400 border-amber-200 border-solid border-[1.534px] hover:bg-amber-300" : "border-solid border-[0.767px] border-stone-300 hover:bg-gray-50"}`}
              onClick={() => setStatus("Expired")}
            >
              <span className="text-xs font-medium text-black whitespace-nowrap">
                Expired
              </span>
            </button>
          </div>
        </nav>

        <div className="flex flex-col gap-2 w-full">
          {loading ? (
            <div className="text-center py-8 text-gray-500">
              Loading discounts...
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : discounts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No discounts found.
            </div>
          ) : (
            discounts.map((discount, index) => (
              <DiscountItem
                key={discount.id || index}
                title={discount.discount_item}
                date={discount.start_date}
                percentage={`%${discount.discount_percentage}`}
                status={discount.status}
              />
            ))
          )}
        </div>

        <button className="flex justify-center items-center w-full sm:w-[304px] py-3 bg-amber-400 rounded-lg border border-amber-400 shadow-sm hover:bg-amber-500 transition-colors mt-6">
          <span className="text-base font-bold text-white">
            Create new discount
          </span>
        </button>
      </div>
    </section>
  );
};
