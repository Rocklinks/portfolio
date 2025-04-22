import himg from '../assets/hero.png'

export default function Hero() {
    return <section className='flex'>
        <h1 className='w-1/2'>Hi, <br/> Im Rocklin K S
        <p>Im a Web-Developer</p>
        </h1>
        <img className='w-1/3' src={himg} alt="Rocky Bhai"/>
        

    </section>
}