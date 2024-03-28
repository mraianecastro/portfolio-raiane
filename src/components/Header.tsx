import Button from "./Button";
import scrollToSection from "./utils/scrollTo";

function Header() {
  return (
    <div className=" wrapper bg-neutral-950">
      <div className="adapter">
        <div className="flex items-center justify-end p-1 mr-4 gap-24 text-center">
          <Button
            type="secondary"
            title="Sobre"
            onClick={() => scrollToSection("about")}
          />
          <Button
            type="secondary"
            title="Projetos"
            onClick={() => scrollToSection("services")}
          />

          <Button
            type="secondary"
            title="Contatos"
            onClick={() => scrollToSection("contacts")}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
