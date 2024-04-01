import Código from "../assets/Código.webp";

function About() {
  return (
    <div className="wrapper bg-neutral-950">
      <div className="adapter">
        <div className="flex flex-col md:flex-row py-8 items-center justify-center mx-10 ">
          <div className=" text-white max-w-xl">
            <h1 className="text-3xl">
              {" "}
              <span className="text-cyan-400">Habilidades</span> e ferramentas
            </h1>
            <p className="pt-4">
              Para uma visão geral mais detalhada, sinta-se à vontade para
              verificar as ferramentas que foram usadas por projeto.
            </p>
          </div>
          <img
            className="h-[500px] object-contain pt-8"
            src={Código}
            alt="Imagem de Código"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
