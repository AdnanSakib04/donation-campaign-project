import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { id, description, price, color_text_and_button_bg, color_card_bg, color_category_bg, category, title, picture } = donation;

   

    
    return (
        <Link to={`/donations/${id}`}>
         <div style={{backgroundColor: color_card_bg}} className={`card card-compact w-[312px]   `}>
        <figure><img src={picture} alt="" /></figure>
        <div className="card-body">
            <span style={{color: color_text_and_button_bg, backgroundColor: color_category_bg}} className={`py-1 px-2  text-[14px]   font-medium max-w-max `}>{category}</span>
            <h2 style={{color: color_text_and_button_bg}} className={`card-title font-semibold`}>{title}</h2>

            
           
        </div>
    </div>
    </Link>
       
    );
};

export default DonationCard;