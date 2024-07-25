import Container from "./web/container";

export default function Navigation() {
  return (
    <header className="w-full bg-white fixed z-30">
      <Container className="py-3">
        <h1 className="capitalize text-3xl font-extrabold">intiweb</h1>
      </Container>
    </header>
  );
}