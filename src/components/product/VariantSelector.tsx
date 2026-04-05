"use client";

import { useState } from "react";

interface VariantSelectorProps {
  label: string;
  options: string[];
  onChange?: (value: string) => void;
}

export function VariantSelector({ label, options, onChange }: VariantSelectorProps) {
  const [selected, setSelected] = useState(options[0] || "");

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="mb-lg">
      <label className="text-sm font-medium text-text-primary mb-md block">
        {label}
      </label>
      <select
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full px-lg py-md border border-border-primary rounded-[4px] bg-bg-secondary text-sm text-text-primary focus:outline-none focus:border-text-primary transition-colors duration-300"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
