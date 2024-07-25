import Link from "next/link";
import Options from "./components/options";
import Container from "./components/web/container";
import Button from "./components/web/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="w-full bg-white fixed z-30">
        <Container className="py-3">
          <h1 className="capitalize text-3xl font-extrabold">intiweb</h1>
        </Container>
      </header>
      <section className="min-h-[110vh] py-20 bg-gradient-to-tr from-orange-600 to-yellow-500">
        <Container className="h-full flex flex-col gap-8 justify-center items-center pt-10">
          <h1 className="w-5/6 text-9xl text-center text-white">Crea tu página web profesional</h1>
          <p className="text-2xl">¿Qué tipo de sitio web te gustaría crear?</p>
          <Options />
          <Link href={"/"}>
            <Button className="text-xl font-bold tracking-wider rounded-full px-8 border-2 bg-white text-slate-900
              hover:bg-slate-900 hover:border-slate-900 hover:text-white">
              comenzar
            </Button>
          </Link>
          <Image 
            src={'/website-demo.png'}
            alt="website"
            width={1024}
            height={768} />
        </Container>
      </section>
    </div>
  );
}
