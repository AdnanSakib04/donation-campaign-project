
const DonationCard = ({ donation }) => {
    const { id, description, price, color_text_and_button_bg, color_card_bg, color_category_bg, category, title, picture } = donation;

   

    
    return (
        <div className={`card card-compact w-[312px]  shadow-xl bg-[${color_card_bg}]`}>
            <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
                <span className={`p-1 text-[14px]  text-[${color_text_and_button_bg}] font-medium max-w-max bg-[${color_category_bg}]`}>{category}</span>
                <h2 className={`card-title text-[${color_text_and_button_bg}]`}>{title}</h2>
                
               
            </div>
        </div>
    );
};

export default DonationCard;