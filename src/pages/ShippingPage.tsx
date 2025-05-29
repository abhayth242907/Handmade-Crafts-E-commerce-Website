import React from 'react';

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-poppins font-bold text-neutral-900 mb-8">
            Shipping & Returns
          </h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    We take pride in ensuring your handcrafted items reach you safely and promptly.
                    Our shipping policies are designed to provide you with the best possible service.
                  </p>

                  <h3 className="text-lg font-medium mt-6 mb-2">Delivery Times</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kathmandu Valley: 2-3 business days</li>
                    <li>Other locations in Nepal: 4-7 business days</li>
                    <li>International shipping: 10-15 business days</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-6 mb-2">Shipping Costs</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kathmandu Valley: Free shipping on orders over NPR 5,000</li>
                    <li>Outside Valley: Calculated based on weight and destination</li>
                    <li>International: Varies by country and package weight</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Returns Policy</h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    We want you to be completely satisfied with your purchase. If you're not happy
                    with your order, we accept returns under the following conditions:
                  </p>

                  <h3 className="text-lg font-medium mt-6 mb-2">Return Eligibility</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Items must be unused and in original packaging</li>
                    <li>Returns must be initiated within 7 days of delivery</li>
                    <li>Original receipt or proof of purchase required</li>
                    <li>Custom orders are not eligible for return</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-6 mb-2">Refund Process</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Refunds will be processed within 5-7 business days</li>
                    <li>Original shipping costs are non-refundable</li>
                    <li>Return shipping costs must be paid by the customer</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Damaged Items</h2>
                <p className="text-neutral-700">
                  If you receive a damaged item, please contact us within 48 hours of delivery with
                  photos of the damage. We will arrange for a replacement or refund as appropriate.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;