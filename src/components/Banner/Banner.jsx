
const Banner = () => {
    return (
        <div className=" min-h-[600px] bg-sky-400 flex justify-center items-center ">
           <div>
           <h1 className=" text-3xl md:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
            <div className="form-control max-w-[300px] md:max-w-md mx-auto mt-10">
                <label className="input-group">
                   
                    <input type="text" placeholder="Search here...." className="input input-bordered w-[360px]" />
                    <span className="bg-[#FF444A] text-white">Search</span>
                </label>
            </div>
           </div>
        </div>
    );
};

export default Banner;