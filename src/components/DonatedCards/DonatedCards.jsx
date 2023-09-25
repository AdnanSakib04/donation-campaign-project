
const DonatedCards = ({ donation }) => {
    const { id, description, price, color_text_and_button_bg, color_card_bg, color_category_bg, category, title, picture } = donation;
    return (
        <div>


            <div style={{ backgroundColor: color_card_bg }} className="card card-side   max-w-[648px] ">
                <figure  className=" max-w-[220px]  h-full"><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <span style={{ color: color_text_and_button_bg, backgroundColor: color_category_bg }} className={`py-1 px-2  text-[14px]   font-medium max-w-max `}>{category}</span>
                    <h2 className={`card-title text-2xl font-semibold`}>{title}</h2>
                    <p style={{ color: color_text_and_button_bg }} className=" text-[16px] font-semibold">${price}</p>
                    <div className="card-actions justify-start">
                        <button style={{ backgroundColor: color_text_and_button_bg }} className="btn w-[140px] h-[40px] text-white text-xs md:text-[16px] border-none  font-semibold">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatedCards;