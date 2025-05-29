import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-poppins font-bold text-neutral-900 mb-8">
            Terms & Conditions
          </h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-neutral-700">
                  These terms and conditions govern your use of ArtisanCrafts website and services.
                  By accessing or using our website, you agree to be bound by these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use of Website</h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    You agree to use the website only for lawful purposes and in a way that does
                    not infringe the rights of any third party or restrict or inhibit anyone
                    else's use and enjoyment of the website.
                  </p>
                  <p>
                    You must not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Misuse the website</li>
                    <li>Breach security measures</li>
                    <li>Submit false or misleading information</li>
                    <li>Impersonate any person or entity</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Products & Services</h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    All products are handcrafted and may have slight variations in color, texture,
                    and size. These variations are not considered defects but rather characteristics
                    of handmade items.
                  </p>
                  <p>
                    We reserve the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify product specifications</li>
                    <li>Adjust prices without notice</li>
                    <li>Discontinue products</li>
                    <li>Limit order quantities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Pricing & Payment</h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    All prices are in Nepali Rupees (NPR) and include applicable taxes.
                    Payment must be made in full before order processing begins.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    All content on this website, including text, graphics, logos, images, and
                    software, is the property of ArtisanCrafts and is protected by copyright laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    We shall not be liable for any indirect, incidental, special, consequential,
                    or punitive damages arising from your use of the website or our products.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;