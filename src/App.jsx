import { useState, useEffect } from "react";
import {
  HomePage,
  MenuPage,
  AboutPage,
  LocationsPage,
  CartPage,
  TrackingPage,
} from "./pages.jsx";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakSelect,
  TweakSlider,
  TweakToggle,
} from "./tweaks-panel.jsx";
import { Star, Wordmark } from "./shared.jsx";

const TWEAK_DEFAULTS = {
  mode: "light",
  palette: "classico",
  fontSize: 18,
  highContrast: false,
  buttonStyle: "default",
};

const PALETTES = {
  classico: {
    rust: "#B5451B",
    espresso: "#2C1A0E",
    cream: "#FAF6F1",
    warm: "#F5F0EB",
    surface: "#FFFFFF",
    surface2: "#F0E9DF",
  },
  verdone: {
    rust: "#2F6B3A",
    espresso: "#16241A",
    cream: "#F5F2EA",
    warm: "#EAEFE6",
    surface: "#FFFFFF",
    surface2: "#E6EBE0",
  },
  notte: {
    rust: "#C7793C",
    espresso: "#0E0A07",
    cream: "#1A1410",
    warm: "#F0E5D6",
    surface: "#241A12",
    surface2: "#2E2118",
  },
  marina: {
    rust: "#1F4F7A",
    espresso: "#0E1A26",
    cream: "#F1F4F7",
    warm: "#E5ECF1",
    surface: "#FFFFFF",
    surface2: "#E1E8EE",
  },
};

function NavBar({ page, goto, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "Story" },
    { id: "locations", label: "Locations" },
    { id: "tracking", label: "Order Status" },
  ];

  const handleGoto = (id) => {
    goto(id);
    setMenuOpen(false);
  };

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <Wordmark onClick={() => handleGoto("home")} />
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? "Close navigation" : "Open navigation"}
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
        <ul
          id="nav-links"
          className="nav-links"
          data-open={menuOpen ? "1" : "0"}
        >
          {links.map((l) => (
            <li key={l.id}>
              <button
                className="nav-link"
                data-active={page === l.id ? "1" : "0"}
                aria-current={page === l.id ? "page" : undefined}
                onClick={() => handleGoto(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              className="nav-cart"
              onClick={() => handleGoto("cart")}
              aria-label={`Cart, ${cartCount} items`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="nav-cart-count">{cartCount}</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer({ goto }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div
              style={{
                fontFamily: "Alfa Slab One, serif",
                fontSize: 32,
                letterSpacing: "0.04em",
                marginBottom: 8,
              }}
            >
              PUCCINO<span style={{ color: "var(--rust)" }}>'</span>S
            </div>
            <div
              className="font-script"
              style={{ fontSize: 32, color: "var(--rust)", marginBottom: 16 }}
            >
              the real coffee of Italy
            </div>
            <p style={{ opacity: 0.8, fontSize: 15, maxWidth: 38 + "ch" }}>
              Founded in 1962 on Royal Street. Four cafés across New Orleans,
              all family-owned.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("locations");
                  }}
                  href="#"
                >
                  French Quarter
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("locations");
                  }}
                  href="#"
                >
                  Magazine Street
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("locations");
                  }}
                  href="#"
                >
                  Marigny
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("locations");
                  }}
                  href="#"
                >
                  Mid-City
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Order</h4>
            <ul>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("menu");
                  }}
                  href="#"
                >
                  Full Menu
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("menu");
                  }}
                  href="#"
                >
                  Granita
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("menu");
                  }}
                  href="#"
                >
                  Pastries
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("tracking");
                  }}
                  href="#"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Café</h4>
            <ul>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    goto("about");
                  }}
                  href="#"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a href="#">Catering</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 1962–2026 Puccino's Coffee · New Orleans</span>
          <span>Made slow.</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.mode = t.mode;
    root.dataset.contrast = t.highContrast ? "high" : "normal";
    root.dataset.btnStyle = t.buttonStyle;
    root.style.setProperty("--base-fs", t.fontSize + "px");

    const p = PALETTES[t.palette] || PALETTES.classico;
    root.style.setProperty("--rust", p.rust);
    root.style.setProperty("--espresso", p.espresso);
    root.style.setProperty("--cream", p.cream);
    root.style.setProperty("--warm-white", p.warm);
    root.style.setProperty("--accent", p.rust);

    if (t.mode === "light") {
      root.style.setProperty("--bg", p.cream);
      root.style.setProperty("--surface", p.surface);
      root.style.setProperty("--surface-2", p.surface2);
      root.style.setProperty("--ink", p.espresso);
    } else {
      root.style.setProperty("--bg", p.espresso);
      root.style.setProperty("--surface", p.surface);
      root.style.setProperty("--surface-2", p.surface2);
      root.style.setProperty("--ink", p.warm);
    }
  }, [t]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const goto = (p) => setPage(p);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((l) => l.id === item.id);
      if (found) {
        return prev.map((l) =>
          l.id === item.id ? { ...l, qty: l.qty + 1 } : l,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setToast(`Added ${item.name}`);
    clearTimeout(window.__toastT);
    window.__toastT = setTimeout(() => setToast(null), 2200);
  };

  const startOrder = () => {
    const id = String(Math.floor(1000 + Math.random() * 9000));
    setOrderId(id);
    setOrderItems(cart);
    setCart([]);
    setPage("tracking");
  };

  const cartCount = cart.reduce((n, l) => n + l.qty, 0);

  const pageLabel = {
    home: "01 Home",
    menu: "02 Menu",
    about: "03 About",
    locations: "04 Locations",
    cart: "05 Cart",
    tracking: "06 Order Tracking",
  }[page];

  return (
    <div data-screen-label={pageLabel}>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <NavBar page={page} goto={goto} cartCount={cartCount} />

      {page === "home" && <HomePage goto={goto} addToCart={addToCart} />}
      {page === "menu" && <MenuPage addToCart={addToCart} cart={cart} />}
      {page === "about" && <AboutPage goto={goto} />}
      {page === "locations" && <LocationsPage />}
      {page === "cart" && (
        <CartPage
          cart={cart}
          setCart={setCart}
          goto={goto}
          startOrder={startOrder}
        />
      )}
      {page === "tracking" && (
        <TrackingPage orderId={orderId} orderItems={orderItems} goto={goto} />
      )}

      <Footer goto={goto} />

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <Star size={16} /> {toast}
        </div>
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.mode}
          options={["light", "dark"]}
          onChange={(v) => setTweak("mode", v)}
        />
        <TweakSelect
          label="Palette"
          value={t.palette}
          options={[
            { value: "classico", label: "Classico (rust)" },
            { value: "verdone", label: "Verdone (forest)" },
            { value: "notte", label: "Notte (espresso)" },
            { value: "marina", label: "Marina (blue)" },
          ]}
          onChange={(v) => setTweak("palette", v)}
        />

        <TweakSection label="Accessibility" />
        <TweakSlider
          label="Body size"
          value={t.fontSize}
          min={16}
          max={26}
          unit="px"
          onChange={(v) => setTweak("fontSize", v)}
        />
        <TweakToggle
          label="High contrast"
          value={t.highContrast}
          onChange={(v) => setTweak("highContrast", v)}
        />

        <TweakSection label="Components" />
        <TweakRadio
          label="Buttons"
          value={t.buttonStyle}
          options={[
            { value: "default", label: "Slab" },
            { value: "rounded", label: "Pill" },
            { value: "square", label: "Sharp" },
          ]}
          onChange={(v) => setTweak("buttonStyle", v)}
        />
        <TweakToggle
          label="Outlined primary"
          value={t.buttonStyle === "outlined"}
          onChange={(v) => setTweak("buttonStyle", v ? "outlined" : "default")}
        />
      </TweaksPanel>
    </div>
  );
}

export default App;
