import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
const DonationDetails = () => {
    const donationData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donationData.find(donation => donation.id === idInt);

    const handleAddToDonation = () => {
        const addedDonationList = [];
    
        const donatedItems = JSON.parse(localStorage.getItem("donations"));
    
        //jokhon kisu nai tokhon e if vitor dhukba
        if (!donatedItems) {
            addedDonationList.push(donation);
          localStorage.setItem("donations", JSON.stringify(addedDonationList));
          toast.success("Good job!",{
            position: "top-center"
          });
        } 
        
        else {
    
       const isExits = donatedItems.find((donation) => donation.id === id);
    
          
          if (!isExits) {
    
            addedDonationList.push(...donatedItems, donation);
            localStorage.setItem("donations", JSON.stringify(addedDonationList));
            toast.success("Good job!",{
                position: "top-center"
              });
           
          } else {
            toast.error("duplicate",{
                position: "top-center"
              });
          }
    
        
    
    
        }
    
    
    
        // localStorage.setItem('test',JSON.stringify([{name:"hasib"},{name:"ph"}]))
      };
    
    return (
        <div className="max-w-[1320px] mx-auto p-0 md:px-5 mb-20">

          
            <div className="relative">
            <div className=" mx-5 md:mx-0 relative ">
                <img
                    className="w-full md:min-w-full mx-auto max-h-[700px] my-14 "
                    src={donation.picture}
                    alt=""
                />
                 

                
                <div
                    className=" absolute bottom-0 left-0 w-full h-[90px] md:h-[110px] bg-[rgba(11,11,11,0.50)]"
                >
                    
           <div className="absolute bottom-1/4 left-8 md:left-10 lg:left-12">
           <button onClick={handleAddToDonation} style={{backgroundColor: donation.color_text_and_button_bg}} className="btn text-white text-xs md:text-[18px] border-none  font-semibold">Donate ${donation.price}</button>
           </div>
                </div>
                
            </div>

            </div>
           

           

            <h1 className=" font-bold text-3xl text-center md:text-start md:text-[40px] mb-6">{donation.title}</h1>
            <p className="px-5 md:px-0 text-[16px] text-[#0B0B0BB2] text-justify">{donation.description}</p>

        <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationDetails;