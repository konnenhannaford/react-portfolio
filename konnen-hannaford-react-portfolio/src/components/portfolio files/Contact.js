import {Link} from 'react-router-dom';

export default function Contact() {

    return (
        
<div className="card home">
        <div className="card-content">
            <p className="title is-1 ">Get in Touch</p>
        
            <p>Email: konnen23@gmaill.com</p>
            <p>Phone: 0451 107 224</p>
            <p>
                <a href="https://au.linkedin.com/in/konnen-hannaford-b024994a">LinkedIn</a>
            </p>
            <p>
                <a href="https://github.com/konnenhannaford">Github</a>
            </p>
            <br/>
            <Link to="../../images/Konnen Hannaford Web Resume.pdf" download>Download My resume</Link>
            {/* <a href="../../images/Konnen Hannaford Web Resume.pdf" target="_blank" rel="noreferral"><Link mb={4}>Download Resume</Link></a> */}
        </div>
</div>
        
    )
}

