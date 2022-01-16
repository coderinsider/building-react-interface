import { useState, useEffect,useCallback } from 'react';
import  { BiArchive } from 'react-icons/bi';
import Search from "./components/Search";
import AddAppoint from "./components/AddAppointment";
// Getting Data JSON
import AppointmentLists from './components/AppointmentLists';
const App = () => {
  let [appointLists, setAppointLists] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState('asc');
  const filteredAppointments = appointLists.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b) => {
    let order = (orderBy == 'desc') ? 1: -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  });
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
      <Search query={query}
      onQueryChange={myQuery => setQuery(myQuery)}/>

      <ul className="divide-y divide-gray-200">
        {filteredAppointments.map(data => (
          <AppointmentLists 
            key={data.id} 
            data={data}
            onDeleteAppointment={
              appointmentId =>
                setAppointLists(appointLists.filter(data => data.id != appointmentId))
            }
          />
        ))}
      </ul>
    </div>
  );
}
export default App;