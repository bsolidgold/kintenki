export default function HomePage() {
  return (
    <main className="brand-stage">
      <div className="atmosphere" aria-hidden="true">
        <i className="pressure pressure-one" />
        <i className="pressure pressure-two" />
        <i className="scan-line" />
        <i className="grain" />
      </div>

      <div className="brand-lockup">
        <picture className="brand-mark">
          <source media="(max-width: 640px)" srcSet="/kinTenki_logo-square.png" />
          {/* The transparent source art is intentionally inverted on the dark field. */}
          <img src="/kinTenki_logo-main.png" alt="KinTenki" />
        </picture>

        <p className="chaos">Chaos coming soon…</p>
      </div>

      <small className="copyright">© 2026 KinTenki Studios</small>
    </main>
  );
}
