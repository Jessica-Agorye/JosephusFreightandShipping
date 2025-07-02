import React, { useState } from "react";

function QuoteForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Form Data:", formData);
    alert("Thank you! We'll reach out shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        aria-label="Close"
      >
        &times;
      </button>

      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Request a Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        >
          <option value="">Select a service</option>
          <option value="Import">Import</option>
          <option value="Export">Export</option>
          <option value="Logistics">Logistics</option>
          <option value="Clearing & Forwarding">Clearing & Forwarding</option>
        </select>
        <textarea
          name="message"
          placeholder="Message (optional)"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 w-full"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default QuoteForm;
