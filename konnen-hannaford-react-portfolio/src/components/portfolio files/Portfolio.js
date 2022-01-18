import slide1Img from '../../images/quiz.png'
import slide2Img from '../../images/crypto.png'
import slide3Img from '../../images/Note taker.png'
import slide4Img from '../../images/planner.png'
import slide5Img from '../../images/socialnetwork.png'
import slide6Img from '../../images/codepic.png'

export default function Portfolio() {
    return (
            <div>
                <div className="slideshow-container">
                    <div className="mySlides">
                        <img src= {slide1Img} />
                        <div >
                        <p className="text">
                            Java Quizz
                        </p> 
                        <p>
                            <a href="https://github.com/konnenhannaford/Java-Quizz" className="fa fa-github"></a>
                        </p>
                        <p>
                            <a href="https://konnenhannaford.github.io/Java-Quizz/" className="fa fa-desktop" aria-hidden="true"></a>
                        </p>
                    </div>
                    <div className="mySlides">
                        <img src= {slide2Img} />
                        <div >
                            <p className="text">
                                CryptoWorld
                            </p> 
                            <p>
                            <a href="https://github.com/Etta0311/CryptoWorld" className="fa fa-github"></a>
                            </p>
                            <p>
                            <a href="https://etta0311.github.io/Group-project-1/" className="fa fa-desktop" aria-hidden="true"></a>
                            </p>
                        </div>
                    </div>

                    <div className="mySlides">
                        <img src= {slide3Img} />
                        <div >
                            <p className="text">
                                Note Taker
                            </p>
                            <p>
                            <a href="https://github.com/konnenhannaford/Note-Taker" className="fa fa-github"></a>
                        </p>
                        <p>
                            <a href="https://lit-atoll-31253.herokuapp.com/" className="fa fa-desktop" aria-hidden="true"></a>
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
                            <a href="https://github.com/konnenhannaford/Day-Planner" className="fa fa-github"></a>
                        </p>
                        <p>
                            <a href="https://konnenhannaford.github.io/Day-Planner/" className="fa fa-desktop" aria-hidden="true"></a>
                                
                            </p>
                    </div>
                    <div className="mySlides">
                        <img src= {slide5Img} />
                        <div >
                            <p className="text">
                                Social Network API
                            </p> 
                            <p>
                            <a href="https://github.com/konnenhannaford/social-network-api" className="fa fa-github"></a>
                            </p>
                            <p>
                            <a href="https://watch.screencastify.com/v/9PdB2Unjo8uldkJKceG1" className="fa fa-file-video-o" aria-hidden="true"></a>
                            </p>
                        </div>
                    </div>
                    <div className="mySlides">
                        <img src= {slide6Img} />
                        <div >
                            <p className="text">
                                Read-Me-Generator
                            </p> 
                            <p>
                            <a href="https://github.com/konnenhannaford/Read-Me-Generator" className="fa fa-github"></a>
                            </p>
                            <p>
                            <a href="https://watch.screencastify.com/v/BKItKpOcXESryMfuri5v" className="fa fa-file-video-o" aria-hidden="true"></a>
                            </p>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
    </div> 
)
}