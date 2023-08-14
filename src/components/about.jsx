import img from '../../src/assets/images/spray.jpg'

export const About = () => {
    return <section id='about' className="about flex">
        <h1 className="flex column">
            <div className="about-header-blur">
                ALL ABOUT
            </div>
            {/* <span>ME</span  > */}
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ut? Debitis sint nemo facilis quo placeat aliquid, voluptas, nulla error non ipsum omnis vitae consequatur recusandae. Enim nulla voluptas fugit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quam maiores possimus ab dicta neque velit. Cumque nobis soluta reiciendis neque nesciunt possimus autem laboriosam necessitatibus tenetur? Deserunt, sed quia?</p>
        </h1>
        <div className='flex'>
            <div className="flex column align-center justify-center">
                <h1>ME</h1>
                <img src={img} alt="gaya shayo pfp" />
            </div>
        </div>
    </section>
}