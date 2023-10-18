import { BsArrowRightCircle } from "react-icons/bs";

const OurTest = () => {
  return (
    <div className="w-9/12 mx-auto mt-52">
      <div className="md:flex flex-row-reverse items-center gap-10">
        <div>
          <img src="https://i.ibb.co/J5WBFr5/test.png" alt="" />
        </div>
        <div>
          <div className="md:w-9/12 mt-10">
            <h1 className="text-3xl font-bold">Best Test Report</h1>
            <p className="my-4 text-sky-900">
              With the online doctor portal, your specialists will be able to
              collect patient information and prescribe digital prescriptions in
              a simple and secure way
            </p>
            <ul className="">
              <li className="flex gap-2 my-3">
                <span>
                  <BsArrowRightCircle className="mt-1 text-green-600"></BsArrowRightCircle>
                </span>{" "}
                <span>
                  Manage schedule and appointments comfortably from anywhere and
                  any device
                </span>
              </li>
              <li className="flex gap-2 my-3">
                <span>
                  <BsArrowRightCircle className="mt-1 text-green-600"></BsArrowRightCircle>
                </span>{" "}
                <span>Serve patients remotely through video call</span>
              </li>
              <li className="flex gap-2 my-3">
                <span>
                  <BsArrowRightCircle className="mt-1 text-green-600"></BsArrowRightCircle>
                </span>{" "}
                <span>
                  View patient treatment, prescription history and much more
                </span>
              </li>
            </ul>
            <button className="btn btn-success hover:bg-green-500 mt-5">
              View Doctors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTest;