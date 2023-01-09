import './style.css'
import photo from '../../assets/img/c.png'


export default function Header() {
    return (
        
<div className=" header row col-12  m-0">
            <span className=" ham col-4  ">|||</span>
            <header className=" head col-6 ">
                <Menu/>
            </header>
            <div className=' col-2'>
                <Logo/>

            </div>
        </div>
       
        

    )

}
// .......................................
function Menu() {
    return (
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='div'>

        <ul className="col-12 row   justify-content-start">
            <li className="col-3">
                <a href="#">home</a>
            </li>
            <li className="col-3">
                <a href="#">pages</a>
            </li>
            <li className="col-3">
                <a href="#">about us</a>
            </li>
            <li className="col-3">
                <a href="#">contact us</a>
            </li>

        </ul>
        </div>
    )
}

// .....................................


function Logo() {
    return (
        <div className='  _figfood col-12 text-white' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        
            <a href="">
                <h2 className='_logo uppercase'>food</h2>
            </a>
            <figure className='   fig'>
                <img className='  img' src={photo}
                    alt=""/>
            </figure>


        </div>
    )
}
// ..........................................
