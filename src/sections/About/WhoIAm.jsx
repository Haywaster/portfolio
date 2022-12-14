import me from "../../img/me.png"

const WhoIAm = () => {
    return (
        <>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="top-center" className="flex flex-50-gt-sm waypoint animated slide-in-left">
                <img src={me} className="me" alt="I'm" />
                <div className="label bold">Who's this guy?</div>
                <div>
                    I'm a Front-End Developer in Tomsk, Russia.
                    <br />
                    I have serious passion for UI effects, animations and creating
                    intuitive, dynamic user experiences.
                    <br />
                    <span className="page-link highlight" dest="contact">Let's make something special.</span>
                </div>
            </div>
        </>
    );
};

export default WhoIAm;