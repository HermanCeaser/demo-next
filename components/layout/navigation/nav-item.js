import Link from "next/link";

function NavItem({link, name}) {
  return (
    <li>
      <Link href={link}>
        <a
          aria-label={name}
          title={name}
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          {name}
        </a>
      </Link>
    </li>
  );
}

export default NavItem;
