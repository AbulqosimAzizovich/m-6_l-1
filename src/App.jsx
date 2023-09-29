// import Router from "./Router";

// const App = () => {
//   return (
//     <div>
//       <Router />
//     </div>
//   );
// };

// export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactList from "./ContactList";
import ContactForm from "./Contactform";

function App() {
  return (
    <div className="container mx-auto mt-5 bg-indigo-400 p-5 rounded-lg">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactList />
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
