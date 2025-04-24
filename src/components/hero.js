import himg from '../assets/hero.png'
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

export default function Hero() {

    const config = {
        subtitle: 'Im a Web Developer',
        linkedin:'https://www.linkedin.com/in/rocklinks',
        whatsapp:'https://wa.me/917548802331',
        Gmail:'https://mail.google.com/mail/?view=cm&to=ksrocklin@gmail.com'
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero'>Hi, <br/> Im <span className='text-black'>Rocklin</span> K S
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a className="pr-3 hover:text-white" href={config.linkedin} target='blank'><AiOutlineLinkedin size={40}/></a>
                <a className="pr-3 hover:text-white" href={config.whatsapp} target='blank'><AiOutlineWhatsApp size={40}/></a>
                <a className='hover:text-white' href={config.Gmail} target='blank'><AiOutlineMail size={40}/></a>
                
            </div>
        </div>
        <img className='md:w-1/3' src={himg} alt="Rocky Bhai"/>
        

    </section>
}