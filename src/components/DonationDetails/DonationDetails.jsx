import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donationData = useLoaderData();
    const {id} = useParams(); 
    const idInt = parseInt(id);
    const donation = donationData.find(donation=>donation.id === idInt);

    // const handleApplyJob = () => {
    //     saveJobApplication(idInt);
    //     toast('you have applied successfully');
    // }
    return (
        <div className="max-w-[1320px] mx-auto p-0 md:px-5 mb-20">
           
            <img className=" px-5 md:px-0 w-full md:min-w-full mx-auto max-h-[700px]  my-14" src={donation.picture} alt="" />

            <h1 className=" font-bold text-3xl text-center md:text-start md:text-[40px] mb-6">{donation.title}</h1>
            <p className="px-5 md:px-0 text-[16px] text-[#0B0B0BB2] text-justify">{donation.description}</p>
            
            
        </div>
    );
};

export default DonationDetails;