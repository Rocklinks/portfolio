import RImg from '../assets/resume.jpg'
export default function Resume () {
    const config ={
        link:'https://google.com'
    }
    return <section className='flex flex:col md:flex-row bg-secondary px-5' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-center'>
            <img className='w-[300px]' src={RImg} alt='About Me'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[#e026c8] mb-5 w-[140px] font-bold ml-0'>Resume</h1>
            <p className='pb-5'>You can view my Resume<div className='mt-8'><a className='btn' target='blank' href={config.link}>Download</a></div></p>
            </div>
        </div>
    </section>
}