import './style.css'
import photo from '../../assets/img/4.jpg'


export default function About0() {
    return (
        <section className='about mt-0 '>
            <BodyMenu/>

        </section>

    )
}

// ......................................................

function BodyMenu() {
    return (
        <div className='about_all'>
            <Text/>
            <Photo/>

        </div>


    )

}
// ......................................................

function Photo() {
    return (
        <figure className='_fig'>
            <div className='_div' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <img className='_img1'
                src={photo}
                alt=""/>
                </div>
        </figure>
    )


}
// ......................................................

function Text() {
    return (
          <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='_textp'>
            <h2 className='_textp1 pb-5'>Our Food</h2>
            <div className='_textp2'>Our food roots are colourful, global and eclectic with a gourmet, playful edge. We get inspired by flavours and ingredients from all four corners of the world and put our signature ‘wild’ twist to them. Our aim is to provide a little vision on how food could be if we just imagined so!</div>
            
        </div>

    )
}

// ......................................................



