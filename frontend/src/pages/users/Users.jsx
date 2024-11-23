import { useState, useEffect } from 'react';

const Users = () => {
	const [record,setRecord] = useState([])
  

 
   useEffect(() =>{
    const FetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/user`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log(data);
        

     // Parse manually to catch issues
        if (data.success) {
          setRecord(data.user);
        } 
      } catch (err) {
        console.log('Error fetching users:', err.message);
      }
    };
    

    FetchData();
  }, []);
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All User</h1>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {record.map((user,i) => (
            <tr key={user.id}>
              <td className="px-4 py-2">{++i}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
