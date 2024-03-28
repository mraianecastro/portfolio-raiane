import image from "../assets/Ceu.jpg";
import Button from "./Button";

function Banner() {
  return (
    <div className="wrapper">
      <div className="adapter">
        <div className=" flex flex-col absolute text-white items-center justify-center">
          <div className="max-w-xl">
            <h1 className=" flex flex-col text-4xl text-white p-2">
              Olá,
              <span>
                me chamo <span className="text-cyan-400">Raiane</span>,
              </span>{" "}
              Desenvolvedora Front End{" "}
              <span className="text-base p-2">
                Atualmente, me encontro aprimorando minhas habilidades em React,
                amo constuir experiências digitais interativas na web.
              </span>
            </h1>

            <div className="p-2">
              <Button
                type="tertiary"
                title="Entre em contato!"
                onClick={() => {
                  window.open("#");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full h-[500px] object-cover"
        src={image}
        alt="ceu estrelado"
      />
    </div>
  );
}

export default Banner;
