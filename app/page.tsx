import Container from "./components/web/container";
import Button from "./components/web/button";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <Container className="grid grid-cols-2 py-20">
        <article>
          <p className="w-3/4 text-3xl font-semibold">La libertad de crear la página web que quieras</p>
        </article>
        <article className="flex flex-col gap-6">
          <p className="w-3/4">Diseña y crea tu propia página web con calidad profesional. Ya sea que estés promocionando tu negocio, mostrando tu trabajo, abriendo tu tienda online o comenzando un blog, puedes hacerlo todo con <strong>intiweb</strong></p>
          <Link href={"/"}>
            <Button className="text-xl font-bold tracking-wider rounded-full px-8 border-2 bg-slate-900 text-white
              hover:bg-white hover:border-white hover:text-slate-900">
              comenzar
            </Button>
          </Link>
        </article>
      </Container>
      <Footer />
    </div>
  );
}
