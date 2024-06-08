import ReactDom from "react-dom/client"
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Services from "./views/Services/Services";


const root = ReactDom.createRoot(document.getElementById("root"));


const PathName = window.location.pathname

if (PathName == "/") {
    root.render(<Home />)
}

else if (PathName == "/about") {
    root.render(<About />)
}

else if (PathName == "/contact") {
    root.render(<Contact />)
}

else if (PathName == "/services") {
    root.render(<Services />)
}

else {
    root.render(<h1>404 Page Not Found</h1>)
}

