import NavItem from "./nav-item";

function NavItems() {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
        link: "/",
        name: "Features"
    },
    {
        link: "/",
        name: "Pricing"
    }
  ];
  return (
    <ul className="flex items-center hidden space-x-8 lg:flex">
      {links.map(link => {
        return <NavItem key={link.name} link={link.link} name={link.name} />;
        
      })}
    </ul>
  );
}

export default NavItems;