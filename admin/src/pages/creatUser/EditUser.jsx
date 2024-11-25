import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [businessCategory, setBusinessCategory] = useState([]);
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
 const location = useLocation();
 const navigete = useNavigate()
 let busnesscat =[
    "A.C. SERVICE",
    "ADVOCATE",
    "ALUMINIUM WORKER",
    "AUTO RICKSHAW",
    "AUTO MOBILE & SALES",
    "BABY SITTING",
    "BAGGI (HORSE CART)",
    "BANK SERVICE",
    "BANQUET HALL",
    "BATTERY SERVICE",
    "BEAUTY PARLOUR",
    "BIKE SERVICE",
    "BROKER",
    "BUSINESS CONSULTANT",
    "BICYCLE",
    "CAFE",
    "CAR DECORATOR",
    "CAR SERVICE",
    "CAR WASHING",
    "CAR WIRING",
    "CARE TAKER",
    "CARPENTER",
    "CATERING",
    "CCTV.CAMERA",
    "CHAIR REPAIRING",
    "CHARTERED ACCOUNTAT",
    "CHILDREN WEAR",
    "CLASSES",
    "COMPUTER CLASSES",
    "COMPUTER HARDWARE",
    "COMPUTER SOFTWARE",
    "COSMETIC STORE",
    "COURIER SERVICE",
    "DAIRY PRODUCT",
    "DANCE CLASSES",
    "DESIGNER / EDITOR",
    "DHOLI",
    "DIAMOND BUSINESS",
    "DIGITAL MARKETING",
    "DJ SOUND",
    "DOCTOR",
    "E - COMMERCE",
    "EDUCATION",
    "ELECTRICIAN",
    "ELECTRONIC PRODUCT",
    "EMPLOYEE",
    "ENGINEER",
    "EVENT MANAGEMENT",
    "WELDING",
    "FARMER",
    "FASHION DESIGNER",
    "FAST FOOD",
    "FINANCIAL",
    "FLEX BOARD HOARDING",
    "FLOWER DECORATION",
    "FREELANCER",
    "FURNITURE",
    "GAS CHULA SERVICE",
    "GENERATOR SERVICE",
    "GEYSER SERVICE",
    "GLASS WORK",
    "GOVT. PUBLIC SERVICE",
    "GOVT. EMERGENCY SERVICE",
    "GRUH UDHYOG",
    "GYM",
    "HEALTH CARE",
    "HOME CLEANING",
    "HOSPITAL",
    "HOUSE WIFE",
    "IMITATION JEWELLERY",
    "INDUSTRIAL INSTRUMENT",
    "INSURANCE",
    "INTERIOR DESIGNER",
    "INTERNET DEPARTMENT",
    "INVERTER SERVICE",
    "JOB PLACEMENT",
    "JUICE CENTER",
    "LABOUR",
    "LAUNDRY",
    "LIFT SERVICE",
    "LIGHTING",
    "MAID",
    "MANDAP SERVICE",
    "MANUFACTURING",
    "MARKETING",
    "MARRIAGE BUREAU",
    "MEDICAL STORE",
    "MEHNDI ARTIST",
    "MEN'S WEAR",
    "MOBILE & ACCESSORIES",
    "MOTOR SERVICE",
    "MOVERS & PACKER",
    "NURSERY",
    "ORCHESTRA",
    "OTHER",
    "OVEN SERVICE",
    "PAINTER",
    "PANDIT",
    "PASSPORT AGENT",
    "PEST CONTROL",
    "PETCARE SERVICE",
    "PHOTOGRAPHY",
    "PHYSIOTHERAPIST",
    "PLUMBER",
    "PRINTING PRESS",
    "R.O. SERVICE",
    "REAL - ESTATE",
    "REFRESHMENT",
    "RESTAURANTS",
    "RETIRED",
    "RIDES",
    "RTO AGENT",
    "REFRIGERATOR SERVICE",
    "SCRAP ( BHANGAR )",
    "SECURITY SERVICE",
    "SHOEMAKER ( MOCHI )",
    "SHOP",
    "SHUTTER REPAIR",
    "SOCIAL WORKER",
    "SOFA CLEANING",
    "SOLAR PANEL",
    "SOUND SYSTEM REPAIRING",
    "SPOKEN ENGLISH CLASSES",
    "SPORTS",
    "STATIONERY",
    "STOCK MARKET",
    "STUDENT",
    "STUDY CLASSES",
    "SALON",
    "TAXI",
    "TEA CENTER",
    "TELECOM DEPARTMENT",
    "TEXTILE",
    "TIFFIN SERVICE",
    "TOUR & TRAVELERS",
    "TAILOR",
    "TOWING",
    "TRADERS",
    "TRANSPORT",
    "TRAVEL AGENT",
    "TUITION CLASS",
    "T.V. SERVICE",
    "TWO WHEELERS WIRING",
    "TYRE PUNCTURE FIXING",
    "VEGETABLES & FRUITS",
    "VETER INARY DOCTOR",
    "VISA CONSULTANCY & GUIDANCE",
    "WASHING MACHINE SERVICE",
    "WATER SUPPLIER",
    "WEALTH MANAGEMENT",
    "WOMEN WEAR",
    "XEROX",
    "YOGA CLASSES"
  ]
  const handleCategoryChange = (c,checked) => {
	let all = [...businessCategory];
	if(checked){
		all.push(c)
	}else{
		all = all.filter(val => val != c)
	}
	setBusinessCategory(all)
}


 const handleSubmit = async (e) => {
   e.preventDefault();
   const newBusiness = {name, email, password, contact, address, businessCategory, businessName, businessAddress };

   try {
    const record = await fetch(`http://localhost:4000/admin/updateUser`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id:location?.state?._id,
            name:name,
            email:email,
            password:password,
            contact:contact,
            address:address,
            businessCategory:businessCategory,
            businessName:businessName,
            businessAddress:businessAddress
            
            })
    })
    const data = await record.json();
        // console.log(data);
        alert('User Update Successfully');
        navigete('/dashboard/users')

} catch (error) {
    console.log(error);
    return false;
}

 };
 useEffect(()=>{
  setName(location?.state?.name)
  setEmail(location?.state?.email)
  setPassword(location?.state?.password)
  setConfirmPassword(location.state?.confirmPassword)
  setContact(location?.state?.contact)
  setAddress(location?.state?.address)
  setBusinessCategory(location?.state?.businessCategory || []),
  setBusinessName(location?.state?.businessName),
  setBusinessAddress(location?.state?.businessAddress)
},[location?.state])

 return (
   <div className="p-4">
     <h1 className="text-2xl  dark:text-white font-bold mb-4">Edit User</h1>
     <form onSubmit={handleSubmit} method='post' className="space-y-4  dark:text-white">
       <div>
         <label className="block text-sm font-medium">Name</label>
         <input
           type="name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div>
         <label className="block text-sm font-medium">Email</label>
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div>
         <label className="block text-sm font-medium">Password</label>
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div>
         <label className="block text-sm font-medium">Confirm Password</label>
         <input
           type="password"
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div>
         <label className="block text-sm font-medium">Mobile Number</label>
         <input
           type="text"
           value={contact}
           onChange={(e) => setContact(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div>
         <label className="block text-sm font-medium">Address</label>
         <input
           type="text"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
	   <div>
         <label className="block text-sm font-medium">Business Name</label>
         <input
           type="text"
           value={businessName}
           onChange={(e) => setBusinessName(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       <div>
         <label className="block text-sm font-medium">Business Category</label>
          <select
            id="businessCategory"
            name="businessCategory"
            onChange={handleCategoryChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            multiple
          >

            {busnesscat.map((category, index) => (
              <option value={category} onChange={ (e) => handleCategoryChange(category,e.target.checked) } checked={businessCategory.includes(category)|| false} >{category}</option>
            ))}
          </select>
       </div>
      
       <div>
         <label className="block text-sm font-medium">Business Address</label>
         <input
           type="text"
           value={businessAddress}
           onChange={(e) => setBusinessAddress(e.target.value)}
           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
           required
         />
       </div>
       
       <button
         type="submit"
         className="w-full bg-blue-500 text-white font -bold py-2 rounded-md hover:bg-blue-600"
       >
         Edit User 
       </button>
     </form>
   </div>
 );
};

export default EditUser;