import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FormTable from './components/FormTable';
import Sidebar from './components/Sidebar';
import RequestFrom from './components/RequestFrom';
import Dashboard from './Dashboard/Dashboard';
import Sidebar1 from './Dashboard/Sidebar1';
import Add from './Dashboard/Add';
import WorkerNotification from './components/WorkerNotification';
import View from './components/View';
import Pending from './Dashboard/Pending';
import ApendngView from './Dashboard/ApendngView';
import Reject from './components/Reject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/FormTable" element={<FormTable />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/RequestFrom" element={<RequestFrom />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Sidebar1" element={<Sidebar1 />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/WorkerNotification" element={<WorkerNotification />} />
        <Route path="/View" element={<View />} />
        <Route path="/Reject" element={<Reject />} />
        <Route path="/Pending" element={<Pending />} />
        <Route path="/ApendngView" element={<ApendngView />} />

       
      </Routes>
    </Router>
  );
}

export default App;
