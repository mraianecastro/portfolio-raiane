import Site from "../assets/Site.webp";
import Breve from "../assets/Em-breve.webp";
import Button from "./Button";

function Projects() {
  return (
    <div className="wrapper bg-neutral-900" id="projects">
      <div className="adapter">
        <div className="flex flex-col md:flex-row text-white items-center justify-center py-8 mx-10 ">
          <div className="pb-6 text-center">
            <h1 className="text-center text-3xl pb-6">
              Dê uma olhada nos meus projetos!
            </h1>

            <Button
              type="tertiary"
              title="Acesse meu Site!"
              onClick={() => {
                window.open("#");
              }}
            />
          </div>
          <div className="grid grid-cols-2 ">
            <div className="">
              <img className="object-cover " src={Site} alt="Site Jardinagem" />
            </div>
            <img
              className=" h-[200px] object-contain"
              src={Breve}
              alt="Em breve!"
            />
            <img
              className="h-[200px] object-contain"
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
