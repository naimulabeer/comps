import { GoBell } from "react-icons/go";
import { MdOutlineDangerous } from "react-icons/md";
import Button from "../components/Button";

function ButtonPage() {
  const handlerEvent = () => {
    console.log("Clicked!");
  };
  return (
    <div>
      <div>
        <nav className="flex sm:justify-center space-x-4 bg-slate-800 text-white">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
      <div>
        <Button className="mb-5 mt-2" onClick={handlerEvent} outline primary>
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Buy Now
        </Button>
      </div>
      <div>
        <Button success outline>
          See Deal
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <MdOutlineDangerous />
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
