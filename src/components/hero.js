import himg from '../assets/hero.png'
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero'>Hi, <br/> Im <span className='text-black'>Rocklin</span> K S
            <p className='text-2xl'>Im a Web-Developer</p>
            </h1>
            <div className='flex py-10'>
                <a className="pr-3 hover:text-white" href='https://www.linkedin.com/in/rocklinks' target='blank'><AiOutlineLinkedin size={40}/></a>
                <a className="pr-3 hover:text-white" href='https://wa.me/917548802331' target='blank'><AiOutlineWhatsApp size={40}/></a>
                <a className='hover:text-white' href='https://mail.google.com/mail/?view=cm&to=ksrocklin@gmail.com' target='blank'><AiOutlineMail size={40}/></a>
                
            </div>
        </div>
        <img className='md:w-1/3' src={himg} alt="Rocky Bhai"/>
        

    </section>
}