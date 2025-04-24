
export default function Contact () {
    const config ={
        email:'ksrocklin@gmail.com',
        phone:'+917548802331'
    }
      
    return <section className='flex flex-col bg-primary px-5 py-32' id='contact'>
        <div className='flex flex-col items-center text-white'>
            <h1 className='text-3xl border-b-4 border-[#e026c8] mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more, please contact me</p>
            <p className="py-2 cursor-pointer hover:selection:"><span className="font-bold">Email : </span>{config.email}</p>
            <p className="py-2 cursor-pointer hover:selection:"><span  className="font-bold">Phone : </span>{config.phone}</p>
        </div>
    </section>
}