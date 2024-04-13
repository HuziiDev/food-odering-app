export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-gray-700">
                <img className="rounded-full max-h-36 mx-auto" src="/pizza.jpg " alt="" />
                <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rerum!</p>
                <button className="mt-4 bg-primary text-white rounded-full px-4 py-2">Add to Cart ₹120</button>
            </div>
    )
}