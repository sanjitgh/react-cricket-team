import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = ({handelPrice}) => {
  const handelToastify = () =>{
    toast.success('Cradit Added to your Account',{
      position:'top-center'
    })
  }
  return (
    <section className="bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center min-h-[545px] bg-[#131313] rounded-3xl mt-5">
      <div className="text-center">
        <img
          className="w-60 mx-auto"
          src="/src/assets/banner-main.png"
          alt=""
        />
        <h1 className="font-bold text-4xl my-6 text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400">Beyond Boundaries Beyond Limits</p>

        <button onClick={()=>{handelPrice(), handelToastify()}}  className="p-2 rounded-xl bg-[#131313] border border-[#E7FE29] h-16 mt-5">
          <span className="bg-[#E7FE29] hover:bg-[#bed20a] px-[20px] py-3 rounded-lg p-1 font-bold">
            Claim Free Credit
          </span>
        </button>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Banner;
