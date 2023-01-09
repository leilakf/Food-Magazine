import './style1.css'
import photo from '../../assets/img/3.jpg'


export default function About1() {
    return (
        <section className='about1 mt-0 '>
            <BodyMenu/>

        </section>

    )
}

// ......................................................

function BodyMenu() {
    return (
        <div className='about_all1'>
            <Text/>
            <Photo/>

        </div>


    )

}
// ......................................................

function Photo() {
    return (
        <figure className='_fig'>
          <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='_div'>
            <img className='_img2'
                src={photo}
                alt=""/>
                </div>
        </figure>
    )


}
// ......................................................

function Text() {
    return (
        <div  data-aos="fade-right"
     data-aos-offset="300"
  
     data-aos-easing="ease-in-sine" className='_textOrg'>
            <h2 className='_textp1 pb-5'>organic</h2>
            <div className='_textp2'>The food is always fresh, always fun, and there’s always something new! From wings to New York strips, we’ve got it all – and with the whole menu available from open to close, we’ve got whatever suits your appetite!</div>
            
        </div>

    )
}

// ......................................................



