import  { BiArchive } from 'react-icons/bi';
import Search from "./components/Search";
import AddAppoint from "./components/AddAppointment";
// Getting Data JSON
import appointLists from './data.json';
import AppointmentLists from './components/AppointmentLists';
const App = () => {
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