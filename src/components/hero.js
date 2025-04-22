import himg from '../assets/hero.png'

export default function Hero() {
    return <section className='flex px-5 py-32 bg-secondary justify-center'>
        <h1 className='w-1/2 text-white text-4xl'>Hi, <br/> Im Rocklin K S
        <p>Im a Web-Developer</p>
        </h1>
        <img className='w-1/3' src={himg} alt="Rocky Bhai"/>
        

    </section>
}