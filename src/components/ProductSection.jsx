"use client";

import ProductCard from "./ProductCard";

export default function ProductSection({
  products,
  currentFilter,
  onFilterChange,
  onOpenDetail
}) {
  const filteredProducts =
    currentFilter === "all"
      ? products
      : products.filter((p) => p.kategori === currentFilter);

  return (
    <section id="produk" className="section section-alt">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="title-accent">Daftar Mobil</span> Suzuki
        </h2>
        <p className="section-subtitle reveal">
          Pilihan lengkap mobil Suzuki dengan harga resmi OTR Bandung &amp; Cimahi
        </p>

        <div className="filter-chips reveal">
          {[
            { id: "all", label: "Semua Mobil" },
            { id: "suv", label: "SUV & Crossover" },
            { id: "mpv", label: "MPV & City Car" },
            { id: "komersial", label: "Komersial" }
          ].map((chip) => (
            <button
              key={chip.id}
              className={`chip ${currentFilter === chip.id ? "active" : ""}`}
              onClick={() => onFilterChange(chip.id)}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="product-grid" id="product-list">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
