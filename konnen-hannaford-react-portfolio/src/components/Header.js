import logImg from '../images/white.jpeg'
export default function Header() {
    return (
        <header className="main-header">
        <h1 >Konnen Hannaford</h1>
        <h2 className="subtitle is-2">Web Design</h2>     
        <img className="site-logo" src={logImg}/>
    </header>


    )
}

