export const SubMenu = ({ menuLinks = [] }) => {
  return (
    <div className="sub-menu">
      {menuLinks &&
        menuLinks.map((link, index) => {
          return (
            <a key={index} href={link.href} className="pure-button-primary">
              {link.label}
            </a>
          );
        })}
    </div>
  );
};
