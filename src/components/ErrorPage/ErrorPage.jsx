import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
           
        <h1 className="text-center mt-80 text-4xl font-bold">Opps!</h1>
       <div className="text-center mt-8">
       
       <Link to={'/'}><div className="btn bg-[#FF444A] text-white font-bold rounded-lg border-none">go back to home  </div></Link>
      
       </div>

    </div>
    
    );
};

export default ErrorPage;