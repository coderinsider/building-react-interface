import { useState, useEffect,useCallback } from 'react';
import  { BiArchive } from 'react-icons/bi';
import Search from "./components/Search";
import AddAppoint from "./components/AddAppointment";
// Getting Data JSON
import AppointmentLists from './components/AppointmentLists';
const App = () => {
  let [appointLists, setAppointLists] = useState([]);
  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(resp => resp.json())
    .then(data => {
      setAppointLists(data);
    })
  }, []);
  useEffect(() => {
    fetchData()
  }, [fetchData]);
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
      <BiArchive className="inline-block text-red-800"/>
      Your Appointment
      </h1>
      <AddAppoint/>
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointLists.map(data => (
          <AppointmentLists 
            key={data.id} 
            data={data}
          />
        ))}
      </ul>
    </div>
  );
}
export default App;