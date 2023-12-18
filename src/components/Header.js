import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
    return (<header className="App-header">
        
                <h1>Life of Vintage </h1>
                <nav>
                    <ul>
                        <li><AnchorLink href="#manifesto"><button>Manifesto</button></AnchorLink></li>
                        <li><AnchorLink href="#services"><button>Servizi</button></AnchorLink></li>
                        <li><AnchorLink href="#biographies"><button>Biografie</button></AnchorLink></li>
                        <li><AnchorLink href="#contacts"><button>Contatti</button></AnchorLink></li>
                    </ul>
                </nav>
            </header>)
};

export default Header;