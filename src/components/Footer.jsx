import './Footer.css'
import Badge from './Badge';
export default function Footer() {
    const sociallinks = [
        {
            iconpath:"https://pnggallery.com/wp-content/uploads/justdial-jd-logo-02.png",
            platform:"JustDial",
            link:"https://jsdl.in/DT-4662YI6E6U2"
        },
        {
            iconpath:"https://www.svgrepo.com/show/503338/facebook.svg",
            platform:"Facebook",
            link:"https://jsdl.in/DT-4662YI6E6U2"
        },
        {
            iconpath:"https://www.svgrepo.com/show/521711/instagram.svg",
            platform:"Instagram",
            link:"https://jsdl.in/DT-4662YI6E6U2"
        },
    ]
    return (
        <footer className="py-4 footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mb-3 mb-md-0">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-muted text-decoration-none">Home</a></li>
                            <li><a href="#about" className="text-muted text-decoration-none">About</a></li>
                            <li><a href="#services" className="text-muted text-decoration-none">Services</a></li>
                            <li><a href="#contact" className="text-muted text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3">Connect</h5>
                        <div className="d-flex gap-3">
                            {sociallinks.map((link,index)=>(
                                <a href={link.link}   target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                    <Badge key={index} iconpath={link.iconpath} color=""/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="my-4 bg-secondary" />
                <div className="text-center text-muted">
                    <p className="mb-0">&copy; 2024 Arjun MDS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
