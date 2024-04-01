import Button from "./Button";

function Discovery() {
  return (
    <div className="wrapper bg-neutral-950">
      <div className="adapter">
        <div className="flex py-8 gap-20 items-center justify-center">
          <p className="text-white text-3xl font-bold">
            Você tem um projeto em mente?
          </p>
          <div className="text-white">
            <Button
              type="tertiary"
              title="Entre em contato comigo!"
              onClick={() => {
                window.open("#");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discovery;
