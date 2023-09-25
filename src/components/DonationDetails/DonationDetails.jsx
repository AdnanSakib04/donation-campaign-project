import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donationData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donationData.find(donation => donation.id === idInt);

    // const handleApplyJob = () => {
    //     saveJobApplication(idInt);
    //     toast('you have applied successfully');
    // }
    return (
        <div className="max-w-[1320px] mx-auto p-0 md:px-5 mb-20">

          
            <div className="relative">
            <div className=" mx-5 md:px-0 relative ">
                <img
                    className="w-full md:min-w-full mx-auto max-h-[700px] my-14 "
                    src={donation.picture}
                    alt=""
                />
                 

                
                <div
                    className=" absolute bottom-0 left-0 w-full h-[90px] md:h-[110px] bg-[rgba(11,11,11,0.50)]"
                >
                    
           <div className="absolute bottom-1/4 left-8 md:left-10 lg:left-12">
           <button style={{backgroundColor: donation.color_text_and_button_bg}} className="btn text-white text-xs md:text-[18px] border-none  font-semibold">Donate ${donation.price}</button>
           </div>
                </div>
                
            </div>

            </div>
           

           

            <h1 className=" font-bold text-3xl text-center md:text-start md:text-[40px] mb-6">{donation.title}</h1>
            <p className="px-5 md:px-0 text-[16px] text-[#0B0B0BB2] text-justify">{donation.description}</p>


        </div>
    );
};

export default DonationDetails;