type Props = {
  title: string;
  onClick: () => void;
  type?: "primary" | "secondary" | "tertiary";
};

function Button({ title, onClick, type = "primary" }: Props) {
  let classesBotao = "";

  if (type === "primary") {
    classesBotao += "";
  } else if (type === "secondary") {
    classesBotao += "text-white bg-neutral-950  p-2 ";
  } else if (type === "tertiary") {
    classesBotao += "border border-cyan-400 p-4 bg-neutral-950";
  }

  return (
    <button onClick={onClick} className={classesBotao}>
      {title}
    </button>
  );
}
export default Button;
