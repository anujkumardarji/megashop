const Products = () => {
    return (
        <>
            <div className="ml-32 mr-32 mt-16">
                <div className="text-5xl">
                    Phones
                </div>
                <div className="mt-16 flex justify-between cursor-pointer">
                    <div className="underline">All Models</div>
                    <div>Samsung</div>
                    <div>Apple </div>
                    <div>Honor </div>
                    <div>OnePlus </div>
                    <div>More Filters</div>
                    <div>Guides</div>
                </div>
                <div className="mt-16 text-3xl">
                    All models. Take your pick
                </div>
                <div className="flex justify-between mt-16 ">
                    <div className="border-2 rounded-lg drop-shadow p-8">
                        <div className="text-xs	 ">New</div>
                        <div className="text-lg bold">Samsung Galaxy</div>
                        <div className="pt-8 ">
                            <img src="image.png" className="w-64"></img>
                        </div>
                        <div className="flex justify-between mt-8">
                            <div className="pt-1">From $2000</div>
                            <div>
                                <button className="border-2 w-16 p-1 rounded-xl"> Buy </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 rounded-lg drop-shadow p-8">
                        <div className="text-xs	 ">New</div>
                        <div className="text-lg bold">Samsung Galaxy</div>
                        <div className="pt-8 ">
                            <img src="image.png" className="w-64"></img>
                        </div>
                        <div className="flex justify-between mt-8">
                            <div className="pt-1">From $2000</div>
                            <div>
                                <button className="border-2 w-16 p-1 rounded-xl"> Buy </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 rounded-lg drop-shadow p-8">
                        <div className="text-xs	 ">New</div>
                        <div className="text-lg bold">Samsung Galaxy</div>
                        <div className="pt-8 ">
                            <img src="image.png" className="w-64"></img>
                        </div>
                        <div className="flex justify-between mt-8">
                            <div className="pt-1">From $2000</div>
                            <div>
                                <button className="border-2 w-16 p-1 rounded-xl"> Buy </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products