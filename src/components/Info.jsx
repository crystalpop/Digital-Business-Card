import profile from '../images/profile.png'

export default function Info() {
    return (
        <div>
            <img src={ profile } className="profile-pic"/>
            <h1>Crystal Popeney</h1>
            <h6 className="occupation">AAA Enthusiast</h6>
            <p className="phone">(909)964-8318</p>
        </div>
    )
}