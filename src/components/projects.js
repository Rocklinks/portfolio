import site1 from '../assets/ecommerce-websites.jpg'
import site2 from '../assets/food-ecommerce.jpg'
import site3 from '../assets/website-blog.jpg'

export default function Projects () {
    const config={
        proj: [
            {
                image: site1,
                description: 'Ecommerce Site built with HTML,CSS',
                link: 'https://gadgets-pearl.vercel.app/',
            },
            {
                image: site2,
                description: 'Wordpress Website from scratch',
                link: 'https://imart.rf.gd/',
            },
            {
                image: site3,
                description: 'AI Tools Landing Page',
                link: 'https://dev-store1233.pantheonsite.io/t',
            }
        ]
    }
    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
    <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
            <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
        </div>
    </div>
    <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.proj.map((proj) => (
                 <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={proj.image} alt=""/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{proj.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='blank' href={proj.link}>View Project</a>
                        </div>
                    </div>
                </div>
            ))}
           
           
        </div>
    </div>
</section>
}
