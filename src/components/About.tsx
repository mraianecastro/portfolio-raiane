import Códigos from "../assets/Design-sem-nome-transformed.webp";

function About() {
  return (
    <div className="wrapper bg-neutral-900">
      <div className="adapter">
        <div className="flex flex-col md:flex-row py-8 items-center mx-10">
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
          <div className=" flex py-8 gap-6 items-center">
            <img className="h-[250px] object-cover" src={Códigos} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
