import Button from "./Button";
import scrollToSection from "./utils/scrollTo";

function Header() {
  return (
    <div className=" wrapper bg-neutral-950">
      <div className="adapter">
        <div className="flex items-center justify-end mx-4 p-2 text-center md:gap-18">
          <Button
            type="secondary"
            title="Sobre"
            onClick={() => scrollToSection("about")}
          />
          <Button
            type="secondary"
            title="Projetos"
            onClick={() => scrollToSection("projects")}
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
