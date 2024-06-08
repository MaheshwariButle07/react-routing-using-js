import ReactDom from "react-dom/client"

const root = ReactDom.createRoot(document.getElementById("root"));

const Home = () => {
    return (
    <>
    <p>
        Home Page
    </p>
    </>   
)
}

const About = () => {
    return (
    <>
    <p>
        About Page
    </p>
    </>   
)
}

const Contact = () => {
    return (
    <>
    <p>
        Contact Page
    </p>
    </>   
)
}

root.render(
    <>
    <Home/>
    <About/>
    <Contact/>
    </>
)