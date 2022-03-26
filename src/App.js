import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from "./components/Tasks/Tasks"
import Features from "./components/Features/Features"
import Buttons from './components/Buttons/Buttons';
import Topbar from './components/Topbar/Topbar';
function App() {
  return (
    <>
    <div className="App">
     <Sidebar />
     <div className="container d-flex flex-column">
       <Topbar />
     <div className="row">
     <Tasks title="EARNINGS (MONTHLY)" price="$40,000" icon={<i class="fas fa-calendar fa-2x text-gray-300"></i>}/>
     <Tasks title="EARNINGS (ANNUAL)" price="$215,000" icon={<i class="fas fa-dollar fa-2x text-gray-300"></i>}/>
     <Tasks title="TASKS" price="50%" bar={true} icon={<i class="fas fa-clipboard-list fa-2x text-gray-300"></i>}/>
     <Tasks title="PENDING REQUESTS" price="$40,000" icon={<i class="fas fa-calendar fa-2x text-gray-300"></i>}/>
       </div>
       <div className="row">
       <Features title="Earnings overview" chart="line"/>
       <Features title="Revenue Sources" chart="pie"/>
         </div>
         <div className="row">
        

       <Features title="Projects" chart="project"/>
       <Buttons />
       </div>
       <Features title="Illustrations" chart="text"/>
       <Features title="Development Approach" chart="approach"/>
         
           </div>
       </div>
       
    </>
  );
}

export default App;
