import send from "../assets/Services/sendmon.png";
import caseIn from "../assets/Services/casein.png";
import caseOut from "../assets/Services/case-out.png";
import transfer from "../assets/Services/money-transfer.png";

const Service = () => {
  return (
    <div className="bg-white ">
      {/* 2F333C */}
      <div className="w-[90%] py-12 mx-auto">
        <h4 className="font-semibold text-lg">Services</h4>
        <div className="grid grid-cols-4 mt-4 text-[#6E6E6E] font-inter text-[9px] font-semibold text-center place-items-center">
          <div>
            <div className=" p-4 w-fit cursor-pointer rounded-2xl bg-[#00040F]">
              <img src={send} alt="" />
            </div>
            <p className="mt-1">Send Money</p>
          </div>
          <div>
            <div className=" p-4 w-fit cursor-pointer rounded-2xl bg-[#00040F]">
              <img src={caseIn} alt="" />
            </div>
            <p className="mt-1">Cash In</p>
          </div>
          <div>
            <div className=" p-4 w-fit cursor-pointer rounded-2xl bg-[#00040F]">
              <img src={caseOut} alt="" />
            </div>
            <p className="mt-1">Cash Out</p>
          </div>
          <div>
            <div className=" p-4 w-fit cursor-pointer rounded-2xl bg-[#00040F]">
              <img src={transfer} alt="" />
            </div>
            <p className="mt-1">Transfer Money</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
