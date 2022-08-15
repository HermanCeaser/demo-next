import Link from "next/link";

function CtaButton(props) {
  return (
    <Link href={props.link}>
      <li>
        <a
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 cursor-pointer hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label={props.name}
          title={props.name}
        >
          {props.name}
        </a>
      </li>
    </Link>
  );
}

export default CtaButton;