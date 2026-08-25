"use client";

import { useState, useEffect } from "react";
import { getWhatsAppLink } from "../data/siteConfig";

export default function ProductModal({ product, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeImage, setActiveImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [simDpPercent, setSimDpPercent] = useState(20);
  const [simTenor, setSimTenor] = useState(5);
  const [simResult, setSimResult] = useState(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(0);
      setActiveImage(product.image || "");
      setSelectedColor(product.colors && product.colors[0] ? product.colors[0].name : "");
      setSimResult(null);
    }
  }, [product]);

  if (!product) return null;

  const currentVariant =
    product.variants && product.variants.length > 0
      ? product.variants[selectedVariant] || product.variants[0]
      : { name: "", price: 0 };
  const allImages = [product.image, ...(product.gallery || [])].filter(Boolean);

  const calculateSim = (e) => {
    if (e) e.preventDefault();
    const harga = currentVariant.price || 0;
    const dpRatio = simDpPercent / 100;
    const dp = harga * dpRatio;
    const pokok = harga - dp;
    const bungaRates = { 1: 0.05, 2: 0.06, 3: 0.07, 4: 0.08, 5: 0.09 };
    const bunga = bungaRates[simTenor] || 0.08;
    const totalBunga = pokok * bunga * simTenor;
    const totalBayar = pokok + totalBunga;
    const cicilan = Math.round(totalBayar / (simTenor * 12));

    setSimResult({
      harga,
      dp,
      simDpPercent,
      cicilan,
      tenor: simTenor
    });
  };

  return (
    <div
      className="modal active"
      id="modal-detail"
      onClick={(e) => {
        if (e.target.id === "modal-detail") onClose();
      }}
    >
      <div className="modal-content glass">
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          &times;
        </button>

        <div className="modal-grid">
          <div className="modal-gallery">
            <div className="modal-main-img-wrap">
              <img
                src={`/${activeImage || product.image}`}
                alt={product.name}
                className="modal-main-img"
              />
            </div>
            {allImages.length > 1 && (
              <div className="modal-thumbs">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`modal-thumb-btn ${activeImage === img ? "active" : ""}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={`/${img}`} alt={`${product.name} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="color-section">
                <h4>Pilihan Warna</h4>
                <div className="color-chips">
                  {product.colors.map((w, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`color-chip ${selectedColor === w.name ? "active" : ""}`}
                      onClick={() => {
                        setSelectedColor(w.name);
                        if (w.image) setActiveImage(w.image);
                      }}
                      title={w.name}
                    >
                      <span className="color-dot" style={{ backgroundColor: w.hex || "#333" }}></span>
                      <span className="color-name">{w.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="modal-info">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-tagline">{product.tagline}</p>
            <p className="modal-desc">{product.description}</p>

            {product.variants && product.variants.length > 0 && (
              <div className="modal-variants">
                <h4>Pilihan Tipe &amp; Transmisi</h4>
                <div className="variant-buttons">
                  {product.variants.map((v, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`variant-btn ${selectedVariant === index ? "active" : ""}`}
                      onClick={() => {
                        setSelectedVariant(index);
                        setSimResult(null);
                      }}
                    >
                      <span className="var-name">{v.name}</span>
                      <span className="var-price">
                        Rp {(v.price || 0).toLocaleString("id-ID")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.specs && (
              <div className="modal-specs">
                <h4>Spesifikasi Utama</h4>
                <div className="specs-grid">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">{key}</span>
                      <span className="spec-val">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div className="modal-features">
                <h4>Fitur Unggulan</h4>
                <ul className="feature-list">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-sim-box card glass">
              <h4>Simulasi Cicilan Cepat</h4>
              <form onSubmit={calculateSim}>
                <div className="form-group-modal">
                  <label>DP (%)</label>
                  <select
                    value={simDpPercent}
                    onChange={(e) => setSimDpPercent(Number(e.target.value))}
                  >
                    <option value={15}>15% (DP Murah)</option>
                    <option value={20}>20% (Standar)</option>
                    <option value={25}>25%</option>
                    <option value={30}>30%</option>
                  </select>
                </div>
                <div className="form-group-modal">
                  <label>Tenor (Tahun)</label>
                  <select
                    value={simTenor}
                    onChange={(e) => setSimTenor(Number(e.target.value))}
                  >
                    <option value={1}>1 Tahun (12x)</option>
                    <option value={2}>2 Tahun (24x)</option>
                    <option value={3}>3 Tahun (36x)</option>
                    <option value={4}>4 Tahun (48x)</option>
                    <option value={5}>5 Tahun (60x)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-outline btn-full" style={{ marginTop: "8px" }}>
                  Hitung Cicilan
                </button>
              </form>

              {simResult && (
                <div className="sim-result-box" style={{ marginTop: "12px" }}>
                  <p>
                    <strong>DP ({simResult.simDpPercent}%):</strong> Rp {Math.round(simResult.dp).toLocaleString("id-ID")}
                  </p>
                  <p>
                    <strong>Cicilan:</strong> <span className="price-val">Rp {simResult.cicilan.toLocaleString("id-ID")}</span> /bulan ({simResult.tenor} Tahun)
                  </p>
                </div>
              )}
            </div>

            <div className="modal-actions" style={{ marginTop: "20px" }}>
              <a
                href={getWhatsAppLink(`Halo, saya ingin konsultasi & booking unit Suzuki ${product.name} (${currentVariant.name}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-glow btn-full"
              >
                Chat Sales via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
