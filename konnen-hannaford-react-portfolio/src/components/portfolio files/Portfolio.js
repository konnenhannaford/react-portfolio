import slide1Img from '../../images/crypto.png'
import slide2Img from '../../images/crypto.png'
import slide3Img from '../../images/crypto.png'
import slide4Img from '../../images/crypto.png'

export default function Portfolio() {
    return (
            <div>
                <div className="slideshow-container">

                <div className="mySlides">
                    <img src= {slide1Img} />
                    <div >
                    <p className="text">
                        CryptoWorld
                    </p> 
                    <p>
                        <a href="https://github.com/Etta0311/Group-project-1">Github Link</a>
                    </p>
                    <p>
                        <a href="https://etta0311.github.io/Group-project-1/">Deployed Site</a>
                    </p>
                </div>
                </div>

                <div className="mySlides">
                <img src= {slide2Img} />
                <div >
                    <p className="text">
                        Password Generator
                    </p> 
                    <p>
                        <a href="https://github.com/konnenhannaford/password-generator">Github Link</a>
                    </p>
                    <p>
                        <a href="https://konnenhannaford.github.io/password-generator/">Deployed Site</a>
                    </p>
                </div>
                </div>

                <div className="mySlides">
                <img src= {slide3Img} />
                <div >
                    <p className="text">
                        Javascript Quiz
                    </p>
                    <p>
                        <a href="https://github.com/konnenhannaford/Java-Quizz">Github Link</a>
                    </p>
                    <p>
                        <a href="https://konnenhannaford.github.io/Java-Quizz/">Deployed Site</a>
                    </p>
                </div>
                </div>

                <div className="mySlides">
                <img src= {slide4Img} />
                <div>
                        <p className="text">
                            Workday Scheduler
                        </p> 
                        <p>
                            <a href="https://github.com/konnenhannaford/Day-Planner"> Github Link</a>
                        </p>
                        <p>
                            <a href="https://konnenhannaford.github.io/Day-Planner/"> Deployed Site: </a>
                            
                        </p>
                </div>
                </div>

                <a className="prev fa fa-angle-double-left" 
                // onClick="plusSlides(-1)"
                ></a>
                <a className="next fa fa-angle-double-right" 
                // onClick="plusSlides(1)"
                ></a>
                </div>
                <br/>

                <div>
                <span className="dot" 
                // onClick="currentSlide(1)"
                ></span>
                <span className="dot" 
                // onClick="currentSlide(2)"
                ></span>
                <span className="dot" 
                // onClick="currentSlide(3)"
                ></span>
                <span className="dot" 
                // onClick="currentSlide(4)"
                ></span>



            </div>
            </div> 
)
}