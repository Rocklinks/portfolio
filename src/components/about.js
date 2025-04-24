import AImg from '../assets/about.png'
export default function About () {
    const config ={
        line1:"Hi, My name is Rocklin K S. I'm a Front End Developer", 
        line2:"I'm proficient in Frontend skills like HTML,CSS,Tailwind,React,Wordpress additionally linux",
        line3:"In backend I know python,MongoDB",
    }
    return <section className='flex flex:col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AImg} alt='About Me'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-3xl border-b-4 border-[#e026c8] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}