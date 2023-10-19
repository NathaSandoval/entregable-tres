import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/resident";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="border-solid border-2 border-blue-500 rounded-lg">
      <header className="relative">
        <img className="rounded-t-lg" src={resident?.image} alt="" />
        {/* status */}
        <div className="rounded-lg border-solid border-2 border-blue-500 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-1  flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
              characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className=" border-t-4 border-blue-500">
        <div className=" flex border-b border-blue-950 justify-center  ">
          <h4 className="text-2xl font-bold p-2 text-sky-300">{resident?.name}</h4>
        </div>

        <ul className="p-2 px-4 bg-blue-600 opacity-75">
          <li className="text-sky-100">
            <span className="font-serif text-sky-300">species</span>{" "}
            {resident?.species}
          </li>
          <li className="text-sky-100">
            <span className="font-serif text-sky-300">Origin</span>{" "}
            {resident?.origin.name}
          </li>
          <li className="text-sky-100">
            <span className="font-serif text-sky-300">times appear</span>{" "}
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ResidentCard;
