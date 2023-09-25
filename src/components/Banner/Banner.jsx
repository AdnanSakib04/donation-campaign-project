
const Banner = () => {
    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/VCDmmXW/banner-pic.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 bg-[#FFFFFFB2]"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                <div>
           <h1 className="text-[#0B0B0B] text-3xl md:text-4xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
            <div className="form-control max-w-[300px] md:max-w-md mx-auto mt-10">
                <label className="input-group">

                    <input type="text" placeholder="Search here...." className="input input-bordered w-[360px]" />
                    <span className="bg-[#FF444A] text-white">Search</span>
                </label>
            </div>
           </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;