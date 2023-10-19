import { IconSearch } from "@tabler/icons-react"
import axios from "axios";

const Location = ({location, setLocation}) => {
 
 const handleSubmit = (e) => {
   e.preventDefault()
   const idLocation = e.target.idLocation.value

   axios
     .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
     .then(({data})=> setLocation(data))
     .catch((err)=> console.log(err))
 }   
   
  return (
   <section className="grid justify-center">

     {/* <div className="overflow-hidden">
      <img src="" alt="" />
     </div> */}
      <div className='grid justify-center items-center relative mb-16'>
        <img className='w-80 ' src="/portal.gif" alt="" />
        <img  className='w-96 absolute left-1/2 -translate-x-1/2' src="/logorick.png" alt="" />
      </div>
      
    <div className="grid justify-center">
      <form onSubmit={handleSubmit} className="flex mb-10 border-solid border-2 border-blue-500 justify-center w-[320px] max-sm:w-[280px] rounded">
        <input placeholder="Type a location Id..." name="idLocation" className="text-center placeholder-center bg-transparent text-sky-500 flex p-2 outline-none" type="number" required/>
        <button type="submit" className="flex gap-2 items-center"> 
        <IconSearch className="text-sky-100" size={18}/> </button>
      </form>
    </div>

    <div className=" text-sky-100 font-serif sm:hidden grid justify-center">
      <span className=" text-sky-100 ">!Wellcome to the crazy universe!</span>
    </div>

    {/* location info */}

    
    <section className="max-sm:hidden border-solid border-2 border-blue-500 rounded p-5 grid gap-3 bg-sky-200 opacity-75">
           <div className="flex justify-center">
              <h3 className="font-serif text-sky-600" > !welcome to {location?.name}!</h3>
           </div>
       
        
        <ul>
          <div className="flex gap-5">
            <li className="font-serif text-sky-500">Type: {location?.type}</li>
            <li className="font-serif text-sky-500">Dimension: {location?.dimension}</li>
            <li className="font-serif text-sky-500">Population: {location?.residents.length}</li>
          </div>
            
        </ul>
        
        
    </section>
   </section>
  )
}
export default Location