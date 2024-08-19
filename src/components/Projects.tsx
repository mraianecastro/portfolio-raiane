import Site from "../assets/Site.webp";
import Breve from "../assets/Em-breve.webp";
import Button from "./Button";

function Projects() {
  return (
    <div className="wrapper bg-neutral-950" id="projects">
      <div className="adapter">
        <div className="flex flex-col text-white items-center py-8">
          <div className="flex flex-col p-8 md:gap-10 items-center justify-center md:flex-row">
            <h2 className="items-center text-3xl mb-8 text-center md:mb-0">
              Dê uma olhada nos meus projetos!
            </h2>

            <Button
              type="tertiary"
              title="Acesse meu Site!"
              onClick={() => {
                window.open("https://missiones.vercel.app/");
              }}
            />
          </div>
          <div className="flex flex-wrap gap-4 w-full justify-between">
            <img
              className="mx-auto w-[350px] h-[200px] object-cover"
              src={Site}
              alt="Site Jardinagem"
            />

            <img
              className="mx-auto w-[350px] h-[200px] object-cover"
              src={Breve}
              alt="Em breve!"
            />
            <img
              className="mx-auto w-[350px] h-[200px] object-cover"
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
