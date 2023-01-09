import './style.css'
import photo from '../../assets/img/bg.png'
import photo0 from '../../assets/img/sx.png'


export default function Footer() {

    return (
        <section className='footer  '>
            <Section/>

        </section>


    )

}
function Section() {
return(
 <div className='footerBar col-12'>

      
        <Photo/>
        <Photo1/>
    </div>
)

   
}

function Photo(){
    return(
        <figure className=' pt-4'>        
<div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='_div'>
            <img className='_img3 ' src={photo}
                alt=""/>
                </div>
        </figure>
    )
}

function Photo1(){
    return(
        <figure className='fig4 p-4'>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <img className='_img4 ' src={photo0}
                alt=""/>
                </div>
        </figure>
    )
}





