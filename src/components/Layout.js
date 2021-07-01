// Webpack processes this import, not JS
import "./Layout.css";

export const Layout = ({ children }) => {

  return (
    <div className="container">
      {children}
    </div>
  )
}