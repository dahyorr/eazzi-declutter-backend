import Footer from "../Footer"
import Header from "../Header"
import vision from '../../static/vision.png'
import mission from '../../static/mission.png'
import howItWorks from '../../static/how-it-works.png'

const About = () => {
    return(
        <div className='About'>
            <Header/>
            <div className="container">
            <h1 className='text-center'>ABOUT US</h1>
            <div className="vision section flex">
                <div className='content'>
                    <h2 className='title'>Our Vision</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam illum possimus saepe expedita assumenda autem, nulla exercitationem suscipit in dolor quod debitis excepturi, sed odio fugit fuga. Nemo numquam incidunt ipsa reiciendis accusamus minus, eos ea expedita veniam error labore tempora, ut aperiam. Porro, iste? In perspiciatis quam impedit!</p>
                </div>
                <div className='image-container'>
                    <img src={vision} alt="Vision"/>
                </div>
            </div>

            <div className="mission section flex">
                <div className='content'>
                    <h2 className='title'>Our Mission</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam illum possimus saepe expedita assumenda autem, nulla exercitationem suscipit in dolor quod debitis excepturi, sed odio fugit fuga. Nemo numquam incidunt ipsa reiciendis accusamus minus, eos ea expedita veniam error labore tempora, ut aperiam. Porro, iste? In perspiciatis quam impedit!</p>
                </div>
                <div className='image-container'>
                    <img src={mission} alt="Mission"/>
                </div>
            </div>

            <div className="how-it-works section flex">
                <div className='content'>
                    <h2 className='title'>How it works</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae nostrum magnam impedit dicta! Deserunt adipisci odio consequuntur repellat dolorum doloremque impedit labore mollitia necessitatibus nulla iure, omnis voluptatum architecto id odit sint ullam optio assumenda sequi? Rerum inventore eum nostrum deserunt reiciendis facilis, ducimus fuga possimus minima quod autem, consectetur vitae nihil amet? Neque magnam hic quasi necessitatibus assumenda. Omnis adipisci repudiandae quos laboriosam ab sit perferendis maxime in!</p></div>
                <div className='image-container'>
                    <img src={howItWorks} alt="How it works"/>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About