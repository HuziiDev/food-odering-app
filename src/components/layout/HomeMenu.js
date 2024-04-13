import Image from "next/image"
import MenuItem from "../menu/MenuItem"

export default function HomeMenu(){
    return(
        <section>
   <div className="relative w-full">
   <div className=" absolute w-48 -left-12 h-48"><Image src={'/sallad1.png'} layout={'fill'} objectFit={'contain'}/></div>
   <div className=" absolute w-48 -right-12 h-48"><Image src={'/sallad2.png'} layout={'fill'} objectFit={'contain'}/></div>
    
   </div>


        <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
            <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 my-36">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
        </section>
    )
}