import "./Footer.css"

const Footer = () => {
    const footerImage = { backgroundImage: "url(/img/Footer.png)" }
    // return footer
    return (
        <footer className="footer" style={footerImage}>
            <div className="social-media">
                <a href="https://www.facebook.com/luiyifernando.hurtadobuesaquillo/">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.facebook.com/luiyifernando.hurtadobuesaquillo/">
                    <img src="/img/instagram.png" alt="instagram" />
                </a>
                <a href="https://www.facebook.com/luiyifernando.hurtadobuesaquillo/">
                    <img src="/img/twitter.png" alt="twitter" />
                </a>
            </div>
            <img src="/img/Logo.png" alt="Logo" />
            <strong>Desarrollado por Luiyi</strong>
        </footer>
    );
}

export default Footer;