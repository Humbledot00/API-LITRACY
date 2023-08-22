import './App.css';//Imports the CSS styling for the application.

import React, {useState, useEffect } from 'react';//Imports React hooks for state management and side 
import parse from 'xml-parser';

/*
medicineData: Stores fetched medicine data.
hospitalData: Stores fetched hospital data.
bloodData: Stores fetched blood bank data.
showMedicineTable: Controls the display of the medicine data table.
showHospitalTable: Controls the display of the hospital data table.
showBloodTable: Controls the display of the blood bank data table*/


function Card() {
  const [medicineData, setMedicineData] = useState([]);
  const [hospitalData, setHospitalData] = useState([]);
  const [bloodData, setBloodData] = useState([]);
  const [showMedicineTable, setShowMedicineTable] = useState(false);
  const [showBloodTable, setShowBloodTable] = useState(false);
  const [showHospitalTable, setShowHospitalTable] = useState(false);

  // Fetch medicine data
  useEffect(() => {
    fetch('https://api.data.gov.in/resource/26a686fb-eff5-4b33-b5e9-7dd6f41fb870?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=xml&limit=100')
      .then(response => response.text())
      .then(xmlResponse => {
        const parsedData = parse(xmlResponse);
        const records = parsedData.root.children.find(child => child.name === 'records');
        const medicineItems = records ? records.children : [];

        const medicineList = medicineItems.map(item => ({
          medicineName: item.children.find(child => child.name === '_medicinename_')?.content || '',
          typeName: item.children.find(child => child.name === 'typename')?.content || '',
        }));

        setMedicineData(medicineList);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


// Fetch hospital data
useEffect(() => {
  fetch('https://script.google.com/macros/s/AKfycbx6M6Dte3ZMEl7pMimSb3ws-uBxy12XXC81qiaE1VyH18snv5NmpuCVBwIGXQEGBVyDrA/exec')
    .then(response => response.json())
    .then(data => setHospitalData(data.data))  
    .catch(error => console.error('Error fetching hospital data:', error));
}, []);

// Fetch blood data
useEffect(() => {
  fetch('https://script.google.com/macros/s/AKfycbxFwBrk6_EllJ_ig_GTFxHaKe_cIcEryfPXuw8rJ648lHggZb70KeVaUzgNMJpXBVz5YQ/exec')
    .then(response => response.json())
    .then(data => setBloodData(data.data))  
    .catch(error => console.error('Error fetching hospital data:', error));
}, []);

  // Shows the medicine data table.
  const handleShowMedicineTable = () => {
    setShowMedicineTable(true);
    setShowBloodTable(false);
    setShowHospitalTable(false);
  };

  // Shows the hospital data table.
  const handleShowHospitalTable = () => {
    setShowHospitalTable(true);
    setShowMedicineTable(false);
    setShowBloodTable(false);

  };

  // Shows the blood bank data table.
  const handleBloodTable = () => {
    setShowMedicineTable(false);
    setShowHospitalTable(false);
    setShowBloodTable(true);

  };

  // Closes all displayed tables.
  const closeeverything = () => {
    setShowMedicineTable(false);
    setShowHospitalTable(false);
    setShowBloodTable(false);

  };

  return (
    <div className="container px-4 py-5" id="hanging-icons">
      <h2 className="pb-2 border-bottom">Key Features: Explore the Power of MedDot</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">

          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">List of life saving drugs</h3>
            <p>General information about essential and life-saving drugs in India that are recommended by the Indian government. </p>
            <a href="#" className="btn btn-primary" onClick={handleShowMedicineTable}>
              Get Medicine List
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">List of hospitals in Karnataka</h3>
            <p>Seeking medical care? MedDot simplifies your search by fetching a comprehensive list of hospital names from various sources.</p>
            <a href="#" className="btn btn-primary" onClick={handleShowHospitalTable}>
              Get Hospital List
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Blood Bank Data Access</h3>
            <p>"Blood Bank Directory: Accessing Addresses and Contact Information of Blood Banks Across India"</p>
            <a href="#" className="btn btn-primary" onClick={handleBloodTable}>
              Get Data
            </a>
          </div>
        </div>
        
      </div>
      {showMedicineTable  && (
        <div><button type="button" className="btn-close float-end sticky-button" aria-label="Close" onClick={closeeverything}></button>
              <div className="scrollable-container">
                <h4>List of Life Saving Medicines</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Medicine Name</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicineData.map((medicine, index) => (
                      <tr key={index}>
                        <td>{medicine.medicineName}</td>
                        <td>{medicine.typeName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            )}

{showHospitalTable && (
          <div><button type="button" className="btn-close float-end sticky-button" aria-label="Close" onClick={closeeverything}></button>
        <div className="scrollable-container">
    <h4>List of Hospitals</h4>
    <table className="table">
      <thead>
        <tr>
          <th>Hospitals</th>
          <th>Taluk</th>
          <th>District</th>
        </tr>
      </thead>
      <tbody>
        {hospitalData.slice(1,).map((data, index) => (
          <tr key={index}>
            <td>{data.Hospital}</td> 
            <td>{data.Taluk}</td> 
            <td>{data.District}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div></div>
)}

{showBloodTable && (
          <div><button type="button" className="btn-close float-end sticky-button" aria-label="Close" onClick={closeeverything}></button>

      <div className="scrollable-container">
              <button type="button" className="btn-close float-end sticky-button" aria-label="Close" onClick={closeeverything}></button>

    <h4>List of Blood Bank</h4>
    <table className="table">
      <thead>
        <tr>
          <th>Hospitals</th>
          <th>Address</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {bloodData.slice(1,).map((data, index) => (
          <tr key={index}>
            <td width={"300px"}>{data.h_name}</td> 
            <td>{data.Address}</td> 
            <td>{data.Contact}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
)}

    </div>
  );
}



function HealthNews() {
  const [showCards, setShowCards] = useState(false);
  const [healthData, setApiData] = useState({});

  /*
  showCards: A boolean state variable that controls the display of news cards.
  healthData: An object state variable that stores the fetched news data from the API.*/

  useEffect(() => {
    // Fetch data from the API
    fetch(' https://newsapi.org/v2/everything?q=health&apiKey=8b768c57ce1c4bf6bf75a38aa6552404')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const handleGetUpdates = () => {
    setShowCards(true);
  };

  return (
    <div className="container px-4 py-5" id="custom-cards">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="display-4 fw-bold">Get Latest Updates About Health</h2>
          <button className="btn btn-primary mt-4" onClick={handleGetUpdates}>
            Get Updates
          </button>
        </div>
        {showCards && ( <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {healthData.articles.slice(0, 3).map((article, index) => (
              <div className="col" key={index}>
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${article.urlToImage}')` }}>
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{article.title}</h3>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img src={article.urlToImage} alt="Article" width="32" height="32" className="rounded-circle border border-white"/>
                      </li>
                      <li className="d-flex align-items-center me-3">
                        <small>{article.source.name}</small>
                      </li>
                      <li className="d-flex align-items-center">
                        <small>{article.publishedAt}</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
      </div>
       )} 
      </div>

      </div>
  );
}


function LameJoke() {
  const [showCards, setShowCards] = useState(false);
  const [apiData, setApiData] = useState({});
  
  useEffect(() => {
    // Fetch data from the API
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLameJoke = () => {
    setShowCards(true);
  };

  return (
    <div className="container my-5">
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
        <svg className="bi mt-5 mb-3" width="48" height="48">
          <use xlinkHref="#geo-fill"/>
        </svg>
        <h1 className="text-body-emphasis">Enhance Your Day with Laughter</h1>
        <p className="col-lg-6 mx-auto mb-4">
        Embrace our Random Lame Joke Generator! A moment of amusement awaits as you explore our API-powered joke dispenser. 
        </p>
        <button className="btn btn-primary px-5 mb-5" type="button" onClick={handleLameJoke}>
          Get Joke
        </button>
        {showCards && (
        <div class="container my-5">
        <div class="p-5 text-center bg-body-tertiary rounded-3">
          <h3 class="text-body-emphasis">{apiData.setup || 'Connect to Internet'}</h3>
          <h1 class="lead">
          {apiData.punchline}
          </h1>
        </div>
      </div>
      )}
      </div>
      
    </div>
  );
}


//This function defines a React component that represents a navigation bar (navbar) for the MedDot application. 
 function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">MedDot</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="E:\APILITERACY\src\README.txt">Documentation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target='blank' href="https://github.com/Humbledot00/API-LITRACY.git">Source Code</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target='blank' href="https://www.postman.com/humbledot/workspace/api-litracy-project/collection/28749947-2e5f724c-fc69-4dfa-b5e8-b6a40ef27911?action=share&creator=28749947">API Collection</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}


export { Card, Navbar, HealthNews, LameJoke };