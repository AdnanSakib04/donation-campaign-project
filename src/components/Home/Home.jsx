import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";
import Banner from "../Banner/Banner";

const Home = () => {
    const donationData = useLoaderData();
    console.log(donationData);
    return (
        <div>
            <Banner></Banner>

           <div className=" max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-28 mt-24">
           {
            donationData.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
           }
           </div>
        </div>
    );
};

export default Home;