import "./App.css";
import Layout from "./components/Layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

import EventParticipation from "./Pages/Event Participation/EventParticipation";
import PollApp from "./Pages/Polls/PollApp";
import SecurityProtocols from "./Pages/Security Protocol/SecurityProtocol";
import ActivityParticipaes from "./Pages/Activity Participate/ActivityParticipate";
import PersonalDetail from "./Pages/Personal Details/PersonalDetail";
import PersonalDetailTenant from "./Pages/Personal Details/PersonalDetailTenant";
import ServiceAndComplaint from "./Pages/Service And Complaint/ServiceAndComplaint";
import MaintenanceInvoices from "./Pages/Maintanance Invoice/MaintananceInvoice";
import Invoices from "./Pages/Invoices/Invoices";
import OtherIncomeInvoice from "./Pages/Other Income Invoices/OtherIncomeInvoice";


const App = () => {
  const router = createBrowserRouter(
    
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/activityparticipate",
            element: <ActivityParticipaes />,
          },
          {
            path: "/pollapp",
            element: <PollApp />,
          },
         
          {
            path: "/eventparticipation",
            element: <EventParticipation />,
          },
          {
            path: "/securityprotocols",
            element: <SecurityProtocols />,
          },
          {
            path: "/personaldetail",
            element: <PersonalDetail />,
          },
          {
            path: "/personaldetailtenant",
            element: <PersonalDetailTenant />,
          },
          {
            path: "/serviceandcomplaint", 
            element: <ServiceAndComplaint/>,
          }
          ,{
            path: "/maintananceinvoice",
            element: <MaintenanceInvoices/>
          }
          ,{
             path:"/Invoices",
              element:<Invoices />

          }
          ,{
            path:"/OtherIncomeInvoice",
            element:<OtherIncomeInvoice />
          }

        ],
      },
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true, // Opt-in to v7 behavior
      },
    }
  );

  return <RouterProvider router={router} />;
};

export default App;
