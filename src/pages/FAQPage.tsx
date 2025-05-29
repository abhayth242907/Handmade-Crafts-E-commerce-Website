import React from 'react';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You'll need to create an account or sign in to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, e-Sewa, Khalti, and bank transfers. All payments are processed securely."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping within Kathmandu Valley takes 2-3 business days. For other locations in Nepal, delivery typically takes 4-7 business days. International shipping may take 10-15 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery for unused items in their original packaging. Please check our Returns Policy for detailed information."
    },
    {
      question: "Are the products handmade?",
      answer: "Yes, all our products are handcrafted by skilled Nepali artisans using traditional techniques and locally sourced materials."
    },
    {
      question: "Can I customize my order?",
      answer: "Yes, we offer customization for certain products. Please contact us directly to discuss your requirements."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your delivery status."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-poppins font-bold text-neutral-900 mb-8">
            Frequently Asked Questions
          </h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-neutral-200">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;