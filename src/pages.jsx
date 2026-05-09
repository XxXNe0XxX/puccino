import { useState, useEffect } from "react";
import { Star, Rays, Placeholder } from "./shared.jsx";
import { MENU, CATEGORIES, LOCATIONS } from "./data.js";

export function HomePage({ goto, addToCart }) {
  return (
    <main id="main">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <Star size={14} /> Est. 1962 · New Orleans
            </span>
            <h1 style={{ marginTop: 18 }}>
              SLOW MORNINGS,
              <br />
              <span className="ital">the real way.</span>
              STRONG COFFEE.
            </h1>
            <p className="hero-lede">
              Six decades of Italian café tradition, poured fresh every day in
              the heart of the French Quarter. No syrups, no shortcuts — just
              espresso the way nonna would approve.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => goto("menu")}>
                Order Now <span aria-hidden="true">→</span>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => goto("locations")}
              >
                Find a Location
              </button>
            </div>
          </div>
          <img
            src="https://picsum.photos/seed/hero-barista/800/1000"
            alt="Barista pulling espresso shot"
            style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: 10, display: "block" }}
          />
        </div>
        <div className="hero-rays" aria-hidden="true">
          <Rays size={520} count={36} />
        </div>
      </section>

      <section className="granita" aria-labelledby="granita-h">
        <div className="container granita-grid">
          <img
            src="https://picsum.photos/seed/granita-feature/800/800"
            alt="Granita di Caffè"
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 10, display: "block" }}
          />
          <div>
            <span className="eyebrow">
              <Star size={14} /> The Best Seller
            </span>
            <div className="script" style={{ marginTop: 14 }}>
              signature since '62
            </div>
            <h2 id="granita-h" style={{ marginTop: 8 }}>
              GRANITA
              <br />
              DI CAFFÈ
            </h2>
            <p style={{ marginTop: 18 }}>
              Slow-frozen espresso ice, scraped to order, crowned with
              unsweetened whipped panna and a warm brioche on the side. Born in
              Sicily, perfected on Royal Street. The drink that built Puccino's.
            </p>
            <div className="hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => addToCart(MENU.find((m) => m.id === "g-co"))}
              >
                Add to Order — $7.50
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => goto("about")}
                style={{
                  borderColor: "rgba(245,240,235,0.4)",
                  color: "var(--warm-white)",
                }}
              >
                Read the Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <Star size={14} /> Tasting Menu
            </span>
            <h2>FROM THE BAR</h2>
            <p style={{ color: "var(--ink-2)" }}>
              A short list, made well. Order at the counter or tap below.
            </p>
          </div>
          <div className="menu-grid">
            {MENU.filter((m) =>
              ["esp", "cap", "g-co", "lat", "p-co", "p-ti"].includes(m.id),
            ).map((item) => (
              <article key={item.id} className="menu-card">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                />
                <div className="menu-card-body">
                  <div className="menu-card-row">
                    <h3>{item.name}</h3>
                    <span className="price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="desc">{item.desc}</p>
                  <button className="add" onClick={() => addToCart(item)}>
                    + Add to order
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn btn-secondary" onClick={() => goto("menu")}>
              See the Full Menu
            </button>
          </div>
        </div>
      </section>

      <section
        className="section section-tight"
        style={{ background: "var(--surface-2)" }}
      >
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">
              <Star size={14} /> Visit Us
            </span>
            <h2>
              FOUR ROOMS
              <br />
              ACROSS NEW ORLEANS
            </h2>
          </div>
          <div className="loc-grid">
            {LOCATIONS.slice(0, 3).map((loc) => (
              <article key={loc.name} className="loc-card">
                <span className="pill">{loc.pill}</span>
                <h3>{loc.name}</h3>
                <div className="addr">{loc.addr}</div>
                <div className="addr">{loc.nbhd}</div>
                <div className="hours">{loc.hours}</div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <button className="btn btn-ghost" onClick={() => goto("locations")}>
              All Locations →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export function MenuPage({ addToCart, cart }) {
  const [tab, setTab] = useState("All");
  const items = tab === "All" ? MENU : MENU.filter((m) => m.cat === tab);
  const inCart = (id) => cart.some((c) => c.id === id);

  return (
    <main id="main">
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">
              <Star size={14} /> The Menu
            </span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)" }}>WHAT WE MAKE</h1>
            <p style={{ color: "var(--ink-2)", fontSize: 19 }}>
              Espresso pulled to order, granita scraped fresh, pastries baked at
              dawn next door. Tap any item to add it to your order.
            </p>
          </div>

          <div
            className="menu-tabs"
            role="tablist"
            aria-label="Menu categories"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className="menu-tab"
                role="tab"
                data-active={tab === c ? "1" : "0"}
                aria-selected={tab === c}
                onClick={() => setTab(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {items.map((item) => (
              <article key={item.id} className="menu-card">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                />
                <div className="menu-card-body">
                  <div className="menu-card-row">
                    <h3>{item.name}</h3>
                    <span className="price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="desc">{item.desc}</p>
                  <button
                    className="add"
                    data-added={inCart(item.id) ? "1" : "0"}
                    onClick={() => addToCart(item)}
                  >
                    {inCart(item.id) ? "✓ Added" : "+ Add to order"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function AboutPage({ goto }) {
  return (
    <main id="main">
      <section className="about-hero">
        <div
          className="container"
          style={{ maxWidth: 880, textAlign: "center" }}
        >
          <span className="eyebrow">
            <Star size={14} /> Our Story
          </span>
          <div className="script" style={{ marginTop: 18 }}>
            since nineteen sixty-two
          </div>
          <h1 style={{ marginTop: 4, fontSize: "clamp(48px, 6vw, 84px)" }}>
            FROM PALERMO
            <br />
            TO ROYAL STREET
          </h1>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 24 }}>
        <img
          src="https://picsum.photos/seed/archival-cafe/1600/686"
          alt="Archival photo: Giuseppe Puccino, 1962"
          style={{ width: "100%", aspectRatio: "21/9", objectFit: "cover", borderRadius: 10, display: "block" }}
        />
      </section>

      <section className="container about-grid">
        <div>
          <h2>
            SIX DECADES,
            <br />
            ONE RECIPE.
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 19 }}>
            Giuseppe Puccino opened the first Puccino's on Royal Street in 1962,
            two suitcases and a single La Pavoni machine after a long boat from
            Palermo. He served espresso the only way he knew — short, dark, and
            respected.
          </p>
          <p style={{ fontSize: 19 }}>
            Three generations later, the espresso is still pulled at 9 bar, the
            granita is still scraped by hand every twenty minutes, and the
            brioche still comes out of the oven at 5:30 in the morning. Some
            things you don't change.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="about-stats">
          <div className="stat">
            <div className="num">1962</div>
            <div className="lbl">Founded</div>
          </div>
          <div className="stat">
            <div className="num">4</div>
            <div className="lbl">NOLA Locations</div>
          </div>
          <div className="stat">
            <div className="num">3M+</div>
            <div className="lbl">Granitas Served</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <Star size={14} /> What We Believe
            </span>
            <h2 style={{ textAlign: "center" }}>THREE RULES</h2>
          </div>
          <div className="loc-grid">
            {[
              {
                n: "01",
                h: "Make It Slow",
                p: "Espresso is a 25-second drink. We don't rush, and neither should you. The chair is yours for as long as you want it.",
              },
              {
                n: "02",
                h: "Make It Italian",
                p: "No flavored syrups. No pumpkin anything. Cappuccino is a morning drink. We die on these hills.",
              },
              {
                n: "03",
                h: "Make It Welcoming",
                p: "Big mugs, big tables, no laptops past 11. The café is a public living room — that's how Italians built it.",
              },
            ].map((r) => (
              <article key={r.n} className="loc-card">
                <span className="pill">{r.n}</span>
                <h3>{r.h}</h3>
                <p style={{ color: "var(--ink-2)", margin: 0 }}>{r.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function LocationsPage() {
  return (
    <main id="main">
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">
              <Star size={14} /> Find Us
            </span>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)" }}>
              FOUR ROOMS,
              <br />
              ONE CITY
            </h1>
            <p style={{ color: "var(--ink-2)", fontSize: 19 }}>
              All four cafés are within New Orleans city limits. Dine in, take
              out, or pre-order ahead and skip the line.
            </p>
          </div>

          <Placeholder
            label="Map · New Orleans · 4 pins"
            ratio="21/9"
            style={{ borderRadius: 10, marginBottom: 48 }}
          />

          <div className="loc-grid">
            {LOCATIONS.map((loc) => (
              <article
                key={loc.name}
                className="loc-card"
                style={{ padding: 36 }}
              >
                <span className="pill">{loc.pill}</span>
                <h3 style={{ fontSize: 32 }}>{loc.name}</h3>
                <div className="addr" style={{ fontSize: 18 }}>
                  {loc.addr}
                </div>
                <div className="addr" style={{ fontSize: 18 }}>
                  {loc.nbhd}
                </div>
                <div
                  style={{
                    marginTop: 12,
                    paddingTop: 12,
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  <div
                    className="hours"
                    style={{ fontSize: 16, color: "var(--ink-2)" }}
                  >
                    {loc.hours}
                  </div>
                  <div
                    className="hours"
                    style={{ fontSize: 16, color: "var(--ink-2)" }}
                  >
                    {loc.phone}
                  </div>
                </div>
                <div
                  className="loc-actions"
                  style={{ display: "flex", gap: 8, marginTop: 16 }}
                >
                  <button
                    className="btn btn-secondary"
                    style={{ minHeight: 48, fontSize: 13, padding: "0 20px" }}
                  >
                    Directions
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ minHeight: 48, fontSize: 13, padding: "0 20px" }}
                  >
                    Pre-Order
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function CartPage({ cart, setCart, goto, startOrder }) {
  const subtotal = cart.reduce((s, l) => s + l.price * l.qty, 0);
  const tax = subtotal * 0.0945;
  const total = subtotal + tax;

  const setQty = (id, q) => {
    setCart(
      cart.flatMap((l) =>
        l.id === id ? (q <= 0 ? [] : [{ ...l, qty: q }]) : [l],
      ),
    );
  };

  if (cart.length === 0) {
    return (
      <main id="main">
        <div className="container section-tight">
          <div className="empty-cart">
            <Star size={48} />
            <h2 style={{ marginTop: 16 }}>YOUR CUP IS EMPTY</h2>
            <p
              style={{
                color: "var(--ink-2)",
                fontSize: 18,
                margin: "16px auto 28px",
              }}
            >
              Nothing in your order yet. Start with a granita — most folks do.
            </p>
            <button className="btn btn-primary" onClick={() => goto("menu")}>
              Browse Menu
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">
              <Star size={14} /> Your Order
            </span>
            <h1 style={{ fontSize: "clamp(44px, 5vw, 64px)" }}>YOUR CUP</h1>
          </div>

          <div className="cart-grid">
            <div>
              {cart.map((line) => (
                <div className="cart-line" key={line.id}>
                  <img
                    src={line.image}
                    alt={line.name}
                    style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", borderRadius: "var(--radius-sm)" }}
                  />
                  <div>
                    <h4>{line.name}</h4>
                    <div className="meta">
                      {line.cat} · ${line.price.toFixed(2)} ea
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                  >
                    <div className="qty">
                      <button
                        onClick={() => setQty(line.id, line.qty - 1)}
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span aria-live="polite">{line.qty}</span>
                      <button
                        onClick={() => setQty(line.id, line.qty + 1)}
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                    <div
                      style={{
                        fontFamily: "Alfa Slab One, serif",
                        fontSize: 22,
                        color: "var(--accent)",
                        minWidth: 80,
                        textAlign: "right",
                      }}
                    >
                      ${(line.price * line.qty).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24 }}>
                <button className="btn btn-ghost" onClick={() => goto("menu")}>
                  ← Add more items
                </button>
              </div>
            </div>

            <aside className="cart-summary">
              <h3>SUMMARY</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (9.45%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Pickup</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="btn btn-primary"
                style={{ width: "100%", marginTop: 18 }}
                onClick={startOrder}
              >
                Place Order →
              </button>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--ink-mute)",
                  marginTop: 14,
                  textAlign: "center",
                }}
              >
                Pickup at French Quarter · ready in ~12 min
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export function TrackingPage({ orderId, orderItems, goto }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!orderId) return;
    const t1 = setTimeout(() => setStep(2), 3500);
    const t2 = setTimeout(() => setStep(3), 8000);
    const t3 = setTimeout(() => setStep(4), 14000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [orderId]);

  if (!orderId) {
    return (
      <main id="main">
        <div className="container section-tight">
          <div className="empty-cart">
            <Star size={48} />
            <h2 style={{ marginTop: 16 }}>NO ACTIVE ORDER</h2>
            <p
              style={{
                color: "var(--ink-2)",
                fontSize: 18,
                margin: "16px auto 28px",
              }}
            >
              Place an order and we'll show its progress here.
            </p>
            <button className="btn btn-primary" onClick={() => goto("menu")}>
              Browse Menu
            </button>
          </div>
        </div>
      </main>
    );
  }

  const steps = [
    { num: "01", h: "Order Received", time: "Just now" },
    { num: "02", h: "On the Bar", time: "~2 min" },
    { num: "03", h: "Almost Ready", time: "~6 min" },
    { num: "04", h: "Ready for Pickup", time: "~10 min" },
  ];

  return (
    <main id="main">
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="section-head">
            <span className="eyebrow">
              <Star size={14} /> Order #{orderId}
            </span>
            <h1 style={{ fontSize: "clamp(44px, 5vw, 64px)" }}>YOUR ORDER</h1>
          </div>

          <div className="track-card">
            <div className="track-status">
              <span className="dot" aria-hidden="true"></span>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--ink-mute)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Status
                </div>
                <div
                  style={{ fontFamily: "Alfa Slab One, serif", fontSize: 28 }}
                >
                  {step < 4 ? "IN PROGRESS" : "READY FOR PICKUP"}
                </div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--ink-mute)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Pickup at
                </div>
                <div
                  style={{ fontFamily: "Alfa Slab One, serif", fontSize: 22 }}
                >
                  French Quarter
                </div>
              </div>
            </div>

            <div className="track-steps">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className="track-step"
                  data-done={i < step ? "1" : "0"}
                  data-current={i === step - 1 ? "1" : "0"}
                >
                  <div className="num">{s.num}</div>
                  <h4>{s.h}</h4>
                  <div className="time">{s.time}</div>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: 24, borderTop: "1px solid var(--line)" }}>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--ink-mute)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                In Your Order
              </div>
              {orderItems.map((l) => (
                <div
                  key={l.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    fontSize: 17,
                  }}
                >
                  <span>
                    {l.qty}× {l.name}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: "var(--accent)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    ${(l.qty * l.price).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 24,
              justifyContent: "center",
            }}
          >
            <button className="btn btn-secondary" onClick={() => goto("home")}>
              Back to Home
            </button>
            <button className="btn btn-ghost">Need help?</button>
          </div>
        </div>
      </section>
    </main>
  );
}
