import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Escribe una palabra para buscar..."
        value={value}
        onChange={onChange}
        className="w-full max-w-lg px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
      />
    </div>
  );
}