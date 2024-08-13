import image from "../assets/Ceu.jpg";
import Button from "./Button";

function Banner() {
  return (
    <div className="wrapper" id="about">
      <div className="adapter">
        <div className=" flex flex-col absolute text-white items-center justify-center mx-10 my-24 ">
          <div>
            <h1 className=" flex flex-col text-4xl text-white p-2">
              Olá,
              <span>
                me chamo <span className="text-cyan-400">Raiane</span>,
              </span>{" "}
              sou Desenvolvedora Front End{" "}
              <span className="text-base pt-2 max-w-[70%]">
                Atualmente, me encontro aprimorando minhas habilidades em React,
                amo constuir experiências digitais interativas na web.
              </span>
            </h1>

            <div className="p-2">
              <Button
                type="tertiary"
                title="Entre em contato!"
                onClick={() => {
                  window.open(
                    "http://linkedin.com/in/raianecastrodemoura",
                    "_blank"
                  );
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
