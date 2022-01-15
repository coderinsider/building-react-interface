import  { BiArchive } from 'react-icons/bi';
import Search from "./components/Search";
import AddAppoint from "./components/AddAppointment";
const App = () => {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
      <BiArchive className="inline-block text-red-800"/>
      Your Appointment
      </h1>
      <AddAppoint />
      <Search />
    </div>
  );
}
export default App;