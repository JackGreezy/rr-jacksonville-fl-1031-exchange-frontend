"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type SearchInputProps = {
  placeholder?: string;
  items: Array<{ name: string; href: string }>;
  onNoResults?: (query: string) => void;
  className?: string;
};

export default function SearchInput({
  placeholder = "Search...",
  items,
  onNoResults,
  className = "",
}: SearchInputProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filteredItems = query
    ? items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const exactMatch = query
    ? items.find(
        (item) => item.name.toLowerCase() === query.toLowerCase()
      )
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (exactMatch) {
      router.push(exactMatch.href);
      setQuery("");
    } else if (filteredItems.length > 0) {
      router.push(filteredItems[0].href);
      setQuery("");
    } else if (query && onNoResults) {
      onNoResults(query);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setQuery("");
      inputRef.current?.blur();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 pr-10 text-sm text-[#1F2937] focus:border-[#003366] focus:outline-none"
          aria-label="Search"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1F2937]/50 hover:text-[#1F2937]"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      {isFocused && query && filteredItems.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-y-auto rounded-2xl border border-[#E5E7EB] bg-white shadow-xl">
          <ul className="py-2">
            {filteredItems.slice(0, 10).map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => {
                    router.push(item.href);
                    setQuery("");
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-[#1F2937] transition hover:bg-[#F9FAFB] hover:text-[#003366] focus-visible:bg-[#F9FAFB] focus-visible:text-[#003366] focus-visible:outline-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}




