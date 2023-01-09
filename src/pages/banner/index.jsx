import './style.css'
import photo from '../../assets/img/1.jpg'


export default function Banner() {
    return (
        <section className='banner '>
            <Section/>

        </section>
    )
}
// ................................

function Section() {
    return (
        <div className='banner_all '>
            <Text/>
            <Photo/>

        </div>

    )
}
// ...........................................

function Photo() {
    return (
        <figure>
            <img className='_img' src={photo}
                alt=""/>
        </figure>
    )
}

// .............................................

function Text() {
    return (
        <div className='_text' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        
            <h4 className='_text1'>Most vegetables are very healthy</h4>
            <div className='_text2'>Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.</div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

            <button className='btn1'>learn more</button>
     </div>
        </div>


    )
}
