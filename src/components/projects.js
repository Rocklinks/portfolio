import site1 from '../assets/ecommerce-websites.jpg'
import site2 from '../assets/food-ecommerce.jpg'
import site3 from '../assets/website-blog.jpg'

export default function Projects () {
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full">
        <div className="flex flex-col px-10 py-5"  >
            <h1 className="text-3xl border-b-4 border-[#e026c8] mb-5 w-[150px] font-bold">Projects</h1>
            <p>These are some of my projects i have built using HTML,CSS, React and Wordpress.Check Out</p>
        </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                <img className='h-[200px] w-[500px]' src={site1} alt='Gadgets Ecom Site'/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Ecommerce Site built with HTML,CSS</p>
                </div>
            </div>
            <div className='relative'>
                <img className='h-[200px] w-[500px]' src={site2} alt='Wordpress Site'/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Wordpress Website from scratch</p>
                </div>
                </div>
            <div>
            <div className='relative'>
                <img className='h-[200px] w-[500px]' src={site3} alt='React Site'/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Multi Vendor Site Site like Amazon using Wordpress</p>
                </div>
                </div>
            </div>
            <div>
             </div>
             </div>   
            </div>
    </section>
}