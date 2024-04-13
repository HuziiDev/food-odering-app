import Image from "next/image"
import Right from "../icons/right"

export default function Hero(){
    return(

        <>


        <section className="grid grid-cols-2 gap-24">
        <div className="py-8">
        <h1 className="text-4xl font-semibold  ">Everthing <br /> is better <br /> with a <span className="text-primary">Pizza</span> </h1>
        <p className="my-4 text-gray-500">Pizza is the misssing piece that make the day complete, a simple yet delcious joy in life</p>
        <div className="flex gap-4 text-sm">
            <button className="flex gap-2  bg-primary text-white px-4 py-2 rounded-full items-center">Order now
            <Right />
            </button>
            <button className="flex gap-2 py-2 text-gray-500 font-semibold">Learn more
            <Right/>
            </button>
        </div>
        </div>

        <div className="relative py-8">
         <Image  src={'/pizza.jpg'} width='250' height='100' className="rounded-full"></Image>
         </div>
        </section>



          </>
        
    )
}