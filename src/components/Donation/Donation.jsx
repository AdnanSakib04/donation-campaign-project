import { useEffect, useState } from "react";
import DonatedCards from "../DonatedCards/DonatedCards";

const Donation = () => {
    const [donations, setDonations] = useState([]);
  const [noFound, setNotfound] = useState(false);
  const [isShow,setIsShow] = useState(false);

 useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donations"));

    if (donatedItems) {
        setDonations(donatedItems);




    } else {
      setNotfound("No Data Found");
    }
  }, []);

    return (
        <div>
                  {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          

          <div className=" max-w-[1320px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 justify-items-center mb-10">
            {
                isShow ? donations.map((donation) => (
                    <DonatedCards key={donation.id} donation={donation}></DonatedCards>
                  )) 
                  
                  : donations.slice(0,4).map((donation) => (
                    <DonatedCards key={donation.id} donation={donation}></DonatedCards>
                  ))
            }
          </div>

          {donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className={`px-5 bg-[#009444] block mx-auto text-white w-[110px] h-[48px] rounded-lg font-semibold mb-10  ${isShow && 'hidden'}` }>
            See All
          </button>}
          {
            isShow 
          }
        </div>
      )}
        </div>
    );
};

export default Donation;