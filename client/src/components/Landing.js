import landingImg from '../static/landingImage.png'

const Landing = () => {
    return(
    <div className="Landing container">
        {/* <img src={landingCurve} alt="" /> */}
        <div className="content flex">
            <img className='' src={landingImg} alt='Landing'/>
            <div className='landing-text flex'>

                <p className='large-text'>Do you know your <span className="text-secondary">CLUTTER</span><br/> is
                    someone's <span className="text-primary">TREASURE</span>?
                </p>

                <p className='small-text'>Buy and sell your preloved and new items at affordable prices. Make money from decluttering your space. Buy quality for less</p>
            </div>
        </div>
    
</div>
)
}
export default Landing