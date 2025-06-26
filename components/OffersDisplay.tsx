export const OffersDisplay = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">Matched Offers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((offer) => (
          <div
            key={offer}
            className="border p-4 rounded-xl shadow hover:shadow-lg bg-white"
          >
            <h3 className="text-lg font-semibold">Lender {offer}</h3>
            <p className="text-sm">APR: 5.99%</p>
            <p className="text-sm">Loan Amount: $5,000</p>
            <p className="text-sm mb-2">Monthly Payment: $150</p>
            <button className="bg-blue-600 text-white w-full py-2 rounded-md font-medium hover:bg-blue-700">
              View Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};