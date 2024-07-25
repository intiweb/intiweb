import Button from "./web/button";

export default function Options() {
  return (
    <ul className="w-1/2 flex flex-wrap gap-4 justify-center">
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          tienda online
        </Button>
      </li>
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          blog
        </Button>
      </li>
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          servicios
        </Button>
      </li>
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          portafolio
        </Button>
      </li>
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          evento
        </Button>
      </li>
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          consultor(a)
        </Button>
      </li>
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          restaurante
        </Button>
      </li>
      <li>
        <Button className="px-3 py-2 rounded-md text-white hover:bg-[#ffffff3a]">
          ... otros
        </Button>
      </li>
    </ul>
  );
}