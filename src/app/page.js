"use client";

import { useState } from "react";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const mainLink = { name: "Excuse API" };

  const categories = [
    { name: "Tech", value: "tech" },
    { name: "Pets", value: "pets" },
    { name: "Memes", value: "memes" },
  ];

  const otherLinks = [
    { name: "Excuse EXE", href: "/excuse.exe", download: true, isExecutable: true },
    { name: "Excuse APK", href: "/excuse.apk", download: true, isExecutable: true },
    { name: "Excuse CLI*", href: "https://ayopili.com/terminal?command=pili%20excuse" },
    { name: "Excuse NPM", href: "https://www.npmjs.com/package/excuse-gen/" },
  ];

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const buildAPIUrl = () => {
    if (selectedCategories.length === 0) return "/api/excuse";
    return `/api/excuse?category=${selectedCategories.join(",")}`;
  };

  const handleDownloadClick = (e, link) => {
    if (link.isExecutable) {
      const ok = confirm(
        "Do you understand the risks of downloading files from the internet? Make sure you trust this source."
      );
      if (!ok) {
        e.preventDefault();
      }
    }
  };

  const buttonStyle = (isCategorySelected) => ({
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: isCategorySelected ? "#4caf50" : "#6b5bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    width: "200px",
    transition: "background 0.2s",
  });

  const categoryButtonStyle = (selected) => ({
    padding: "0.4rem 0.8rem",
    fontSize: "0.85rem",
    backgroundColor: selected ? "#ff7f50" : "#aaa",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.2s",
    margin: "0 0.25rem",
  });

  const hoverStyle = (e, color = "#5847d1") => (e.currentTarget.style.backgroundColor = color);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "3rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Main Excuse API button */}
      <a
        href={buildAPIUrl()}
        style={buttonStyle(selectedCategories.length > 0)}
        onMouseOver={(e) =>
          hoverStyle(e, selectedCategories.length > 0 ? "#45a049" : "#5847d1")
        }
        onMouseOut={(e) =>
          hoverStyle(e, selectedCategories.length > 0 ? "#4caf50" : "#6b5bff")
        }
      >
        {mainLink.name}
      </a>

      {/* Category buttons below the main button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
        {categories.map((cat) => (
          <button
            key={cat.value}
            style={categoryButtonStyle(selectedCategories.includes(cat.value))}
            onClick={() => toggleCategory(cat.value)}
            onMouseOver={(e) =>
              hoverStyle(e, selectedCategories.includes(cat.value) ? "#e76b3f" : "#888")
            }
            onMouseOut={(e) =>
              hoverStyle(e, selectedCategories.includes(cat.value) ? "#ff7f50" : "#aaa")
            }
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Other links below */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginTop: "0.5rem" }}>
        {otherLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            download={link.download || false}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={buttonStyle(false)}
            onClick={(e) => handleDownloadClick(e, link)}
            onMouseOver={(e) => hoverStyle(e)}
            onMouseOut={(e) => hoverStyle(e, "#6b5bff")}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}