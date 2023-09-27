import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
    const donationData = useLoaderData();
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState(null);
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
     handleFilterData(search); 
    };
  
    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };
  
    const handleFilterData = (category) => {
      if (!category || category === 'showAll') {
        setFilteredData(donationData);
        setError('');
      }
      else if(category === 'Health' || category === 'health'){
        const searchedData = donationData.filter((donation) => donation.category === 'Health');
        setFilteredData(searchedData);
        setError('');
      } 
      else if(category === 'Education' || category === 'education'){
        const searchedData = donationData.filter((donation) => donation.category === 'Education');
        setFilteredData(searchedData);
        setError('');
      } 
      else if(category === 'Food' || category === 'food'){
        const searchedData = donationData.filter((donation) => donation.category === 'Food');
        setFilteredData(searchedData);
        setError('');
      } 
      else if(category === 'Clothing' || category === 'clothing'){
        const searchedData = donationData.filter((donation) => donation.category === 'Clothing');
        setFilteredData(searchedData);
        setError('');
      } 
      
      else {
        const searchedData = donationData.filter((donation) => donation.category === category);
        setFilteredData(searchedData);
        setError('No Data Found');
      }
    };
  
    useEffect(() => {
      handleFilterData('showAll');
    },[donationData]);


    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/B2mpMFN/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 bg-[#FFFFFFD2]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <div>
                            <h1 className="text-[#0B0B0B] text-3xl md:text-4xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
                            <div className="form-control max-w-[300px] md:max-w-md mx-auto mt-10">
                                <form onSubmit={handleSubmit}>
                                    <label className="input-group text-black">

                                        <input type="text" onChange={handleSearchChange} placeholder="Search here...." className="input input-bordered w-[360px]" />
                                        <span className="bg-[#FF444A] text-white">


                                            <input type="submit" value="Search" />

                                        </span>

                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-28 mt-24">
                {filteredData.map((donation) => (
                    <DonationCard key={donation.id} donation={donation}></DonationCard>
                ))}
            </div>

            {
            error && <h1 className="text-4xl text-center font-bold mb-40">{error}</h1>
        }
        </div>
    );
};

export default Home;