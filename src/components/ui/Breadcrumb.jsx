import { Link } from "react-router-dom";
import Container from "./Container.jsx";

export default function Breadcrumb({ title }) {
  return (
    <section className="bg-ink mb-20">
      <div className="py-14 md:py-20 xl:py-[100px]">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl text-buttery-white md:text-6xl xl:text-[80px] xl:leading-none">{title}</h1>
            <ul className="mt-6 flex items-center justify-center gap-x-3 text-lg text-buttery-white">
              <li>
                <Link to="/" className="transition-colors hover:text-light-lime">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-light-lime">{title}</li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
