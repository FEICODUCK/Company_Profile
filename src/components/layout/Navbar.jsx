import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/site.js";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import Logo from "../ui/Logo.jsx";

const linkClass = ({ isActive }) =>
  `inline-flex items-center gap-x-2 py-3 font-bold transition-colors hover:text-light-lime lg:py-0 ${
    isActive ? "text-light-lime" : "text-buttery-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-ink shadow-[0_1px_0_0_rgb(255_255_255/0.1)]">
      <Container>
        <div className="flex h-[var(--nav-h)] items-center justify-between">
          <div className="flex items-center gap-x-10">
            <Logo onClick={close} />
            <nav className="hidden items-center gap-x-8 lg:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-x-6">
            <Button to="/contact" className="hidden sm:inline-flex">
              Contact Us
            </Button>
            <button
              type="button"
              className="p-1 text-buttery-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {open ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-white/10 bg-ink lg:hidden" aria-label="Mobile navigation">
          <Container>
            <ul className="py-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === "/"} onClick={close} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
