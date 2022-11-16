import Link from "next/link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
function Socials({ dmi }) {
  return (
    <div>
      <ul className="flex items-center text-white">
        {dmi == "true" && (
          <li>
            <MdDarkMode size={35} />
          </li>
        )}
        <li>
          <Link href="https://github.com/greysonstalcup" target={"blank"}>
            <AiFillGithub
              className="ease-in-out duration-500 hover:scale-125"
              size={35}
            />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/@greysonstalcup" target={"blank"}>
            <AiFillTwitterCircle
              className="ease-in-out duration-500 hover:scale-125"
              size={35}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/greysonstalcup"
            target={"blank"}
          >
            <AiFillInstagram
              className="ease-in-out duration-500 hover:scale-125"
              size={40}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/greyson-stalcup"
            target={"blank"}
          >
            <AiFillLinkedin
              className="ease-in-out duration-500 hover:scale-125"
              size={40}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
