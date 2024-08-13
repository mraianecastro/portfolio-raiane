import Site from "../assets/Site.webp";
import Breve from "../assets/Em-breve.webp";
import Button from "./Button";

function Projects() {
  return (
    <div className="wrapper bg-neutral-950" id="projects">
      <div className="adapter">
        <div className="flex flex-col text-white items-center py-8">
          <div className="pb-6 text-center">
            <h1 className="text-center text-3xl pb-6 mx-10">
              Dê uma olhada nos meus projetos!
            </h1>

            <Button
              type="tertiary"
              title="Acesse meu Site!"
              onClick={() => {
                window.open("https://missiones.vercel.app/");
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              className=" h-[200px] object-cover"
              src={Site}
              alt="Site Jardinagem"
            />

            <img
              className=" h-[200px] object-cover"
              src={Breve}
              alt="Em breve!"
            />
            <img
              className="h-[200px] object-cover"
              src={Breve}
              alt="Em breve!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
