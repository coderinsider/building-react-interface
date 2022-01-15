import  { BiArchive, BiTrash } from 'react-icons/bi';
import Search from "./components/Search";
import AddAppoint from "./components/AddAppointment";
// Getting Data JSON
import appointLists from './data.json';
const App = () => {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
      <BiArchive className="inline-block text-red-800"/>
      Your Appointment
      </h1>
      <AddAppoint />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointLists.map(data => (
          <li className="px-3 py-3 flex items-start">
          <button type="button"
          className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <BiTrash /></button>
          <div className="flex-grow">
          <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{data.petName}</span>
          <span className="flex-grow text-right">{data.aptDate}</span>
          </div>
          <div><b className="font-bold text-blue-500">Owner:</b> {data.ownerName}</div>
          <div className="leading-tight">{data.aptNotes} </div>
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;