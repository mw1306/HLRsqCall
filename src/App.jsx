import React from "react";
import hllogo from "./assets/hllogo.jpeg"; // Import your logo
import "./App.css"; // Ensure your CSS is included

function App() {
  return (
  <div className="App">
      {/* Header section */}
      <header className="App-header">
        <img src={hllogo} className="logo" alt="R hl logo" />
        <h1>Hello from Amplify</h1>
      </header>

      {/* Body section without using <body> tag */}
      <div style={{ backgroundColor: '#cfd8dc' }}>
        {/* Navbar */}
        <div className="navbar" id="myTopnav">
          <a href="https://script.google.com/macros/s/AKfycbwWH_KwCTMxWGPENJYQbUQo0CWydSJ52UrCxEanU4rM/dev" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-plus" style={{ fontSize: '24px' }}></i> New call log
          </a>
          <a href="https://friendsofthekoala.org/report-a-koala-sighting/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-binoculars" style={{ fontSize: '24px' }}></i> Sighting
          </a>
          <a href="https://drive.google.com/file/d/11NDbfgFOpFqdXEoAoLJlPwVuwCsMshFe/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-address-card" style={{ fontSize: '24px' }}></i> Rescuer list
          </a>
          <a href="https://drive.google.com/file/d/1Axm5K_PCn3FYQX5Y1oIBKiOICrGb4j6z/view?usp=drive_linkf" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe" style={{ fontSize: '24px' }}></i> Rescuer Maps
          </a>
          <a href="https://drive.google.com/file/d/1ZmWueGJ8BogPXHRdoCyXrAawUCNCP5Vr/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-fire-alt" style={{ fontSize: '24px' }}></i> Bush fire Questions
          </a>
          <a href="https://drive.google.com/file/d/1WeTuVtrAie5htWpp3q5G4Kkl69h0wDT3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-tree" style={{ fontSize: '24px' }}></i> Hotline Emergency tree
          </a>
        </div>

        {/* Main content */}
        <div>
          <img
            src="https://fok-hotliners.web.app/images/koalaphone1.jpg"
            alt="Logo"
            width="100"
            height="100"
            className="center"
          />
        </div>

        <h1 className="center-align">Koala Hotline Call Log Rescue Request Form</h1>

        {/* Form */}
        <form
  id="rescueForm"
  action="https://script.google.com/macros/s/AKfycbwWH_KwCTMxWGPENJYQbUQo0CWydSJ52UrCxEanU4rM/dev"
  method="post"
>  
          <h2>
            Current Call Id #
            <input
              className="w3-border-0 center-align"
              id="uniqueId"
              name="uniqueId"
              style={{ backgroundColor: '#cfd8dc' }}
            />
          </h2>

          {/* Form section: Hotliner */}
          <div className="w3-container w3-margin" style={{ backgroundColor: '#fff8e1' }}>
            <div className="row fontsize">
              <label htmlFor="hotliner">1: Hotliner</label>
            </div>

            <div className="row fontsize">
              <select className="browser-default" name="hotlinerName" id="hotlinerName">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="hotline 1" >
                  
                </option>
                <option value="Select hotline 2">
                  
                </option>
              </select>
            </div>

            {/* Form section: Shift */}
            <div className="row fontsize">
              <label htmlFor="shiftDetails">2: Shift</label>
            </div>

            <div className="row fontsize">
              <select className="browser-default" name="shiftDetails" id="shiftDetails">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Day">Day</option>
                <option value="Night">Night</option>
              </select>
            </div>
          </div>

          {/* Form section: Call Time */}
          <div className="w3-container w3-margin" style={{ backgroundColor: '#b3e5fc' }}>
            <div className="row fontsize">
            <label htmlFor="callTime">3: Call Time</label>

            </div>

            <div className="row fontsize">
              <input
                type="time"
                name="callTimeInput"
                id="callTimeInput"
                pattern="\d{2}:\d{2}:\d{2}"
                title="Select time"
              />
            </div>
         
        
          <div className="row fontsize">
          <label htmlFor="mopPh">4: MOP Phone</label>

          </div>
          <div className="row fontsize">
            <input className="w3-input w3-border w3-animate-input" name="mopPh"  id="mopPh" type="tel" maxlength="30"/>
          </div>
        
       
       
          <div className="row fontsize">
            <label htmlFor="mopName" >5: MOP Full Name</label>
          </div>
          <div className="row fontsize">
            <input name="mopName"  id="mopName" type="text" maxlength="30"/>
          </div>
        {/* </div>	 Comment */}
          
       
     
    
     
            
          <div className="row fontsize">
            <label htmlFor="koalaAddress">6: Koala Address</label>
           
          </div>
          <div className="row fontsize">
            <input className = ".pac-container" placeholder=" " name="koalaAddress" id="koalaAddress" type="text" />
          </div>
      
    
       
          <div className="row fontsize">
             A:   <button className="button w3-hover-red w3-block" type="button" id="geocodeButton">Centre address on map</button>
          </div>
          
          <div className="row fontsize">
  B: Click/Tap on the map to show the Koalas approximate position on map.
  <br /> {/* Self-closing br tag */}
  The GPS will auto-update to dropped pin position.
</div>

      
    {/* test api call added jan 27   Comment */}
        <div id="map" className="row" >
              {/*    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzh94wZl2o5SmfhkyKjoAbxJfhyM9RX6s&callback=initMap&libraries=places&v=weekly" defer></script> Comment */}

        </div> 
    
     <div className="row">
            <div className="row fontsize">
              <label htmlFor="gpsLatitude"> Approx Latitude</label> 
            </div>
            <div className="row fontsize">
              <input  name="gpsLatitude" id="gpsLatitude" type="text"  />
            </div>
          </div> 
            
         <div className="row">
            <div className="row fontsize">
              <label htmlFor="gpsLongitude">Approx Longitude</label>
            </div>
            <div className="row fontsize">
              <input   name="gpsLongitude" id="gpsLongitude" type="text"  />
            </div>
          </div>	  
   
            <div className="row fontsize">
              <label  for="koalaLocation">7: Koala Location</label>
            </div>
            <div className="row fontsize">
                <input   name="koalaLocation" id="koalaLocation" type="text"   maxlength="120"/>
            </div>

    {/* added to get rescue reason Comment */}
    
            <div className="row fontsize">
              <label htmlFor="rescueReason" >8: Rescue Reason</label> 
            </div>
            <div className="row fontsize">
              <select className = "browser-default" id="rescueReason" name="rescueReason"  >
              <option value="" disabled selected>Select</option>
          {/* <?!=  rsqr;  ?> */}
       <option value="test rescue reason" >test rescue reason</option>
        <option value="Deceased" >Deceased</option> 
              </select>
          </div>

            <div className="row fontsize">
              <label  for="rescueOther">8a: Rescue other details (if needed/unlisted):</label>
            </div>

            <div className="row fontsize">
              <input   name="rescueOther" id="rescueOther" type="text"   maxlength="60"/>
            </div>
    
      <div className="row fontsize">
  <label className="blue-text text-darken-4" htmlFor="mopos">9: MOP Present</label>
</div>
           <div className="row fontsize">
              <select className = "browser-default"  name="mopos" id="mopos">
              <option value="" disabled selected>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
        </div>   
    
    {/* viber post section jan 11 1241 Comment */}
    </div> 
    <div className="row card-panel  purple lighten-4">
     
       {/* The element with the ID 'viberPost' Comment */}
    <div className="w3-container w3-margin w3-purple">
    
       
          <div className="row fontsize">   {/* The button that when clicked will trigger the copyToClipboard function Comment */}
      
          <button  type= "button" className="button w3-hover-red w3-block" onclick="appleViberPost();">Create Viber Message and paste into Viber Rescue Team.</button> 
    
          </div>
      {/* The element with the ID for 'rescue text' Comment */}
          <textarea className="w3-container w3-purple row fontsize" id="viberPost">
          </textarea>
          
        
    </div>
   
    {/*Rescuer details section      Comment */}
    
    <div className="w3-container w3-margin w3-pale-green">
       
       <div className="row fontsize">
                <label htmlFor="rescuerName">10: Rescuer</label>
          </div>
           <div className="row fontsize">
           <input   name="rescuerName" id="rescuerName" type="text"   maxlength="60"/>
           </div>
       
        {/* <div className="row">  Comment */}
          <div className="row fontsize">
                <label htmlFor="otherComments">10a: Comments for Rescuer only</label>
          </div>
          <div className="row fontsize">
                <input   name="otherComments"  id="otherComments" type="text" />
          </div> 
        
    </div>
    
    {/*recuer messagee jan 11 1541 Comment */}
    
        <div className="w3-container w3-margin w3-purple">
       
          <div className="row fontsize">   {/* The button that when clicked will trigger the copyToClipboard function Comment */}
                {/* Add some space before the button
                <button  type= "button" className="button w3-hover-red w3-block " onclick="rsqTxtContent()">Create Private Viber/Text Message for * Rescuer </button>
             Comment */}
            <button  type= "button" className="button w3-hover-red w3-block " onclick="appleTxtContent()"> Create Private Viber/Text Message for * Rescuer </button>
          
            
            </div>
                {/* The element with the ID for 'rescue text' Comment */}
          <textarea className="w3-container w3-margin w3-purple row fontsize" id="rsqTxt">
          </textarea>
        
    </div>
    
    <div className="w3-container w3-margin w3-sand">
    
          <div className="row fontsize">
            <label htmlFor="outCome">11: Outcome:</label>
          </div>
          <div className="row fontsize"> <select className = "browser-default" name="outc" id="outc"    >
              <option value="" disabled selected>Select</option>
           
        <option value="out1" >Select 1</option>
           <option value="out2"  >Select 2</option> 
          <option value="out3" >Select 3</option>         
              </select>
              
            </div>
    <div className="row fontsize" >
      <input name="streetAdd" id="streetAdd" type="text"   style={{ display: 'none' }} />

    </div><div className="row fontsize">
      <input name="suburb" id="suburb" type="text"   style={{ display: 'none' }}/>

    </div><div className="row fontsize">
      <input name="postalCode" id="postalCode" type="text"   style={{ display: 'none' }}/>

    </div>
    <div className="row fontsize">
      <input name="localGA" id="localGA" type="text"   style={{ display: 'none' }}/>

    </div>
    
    
    <div>
    <!-- Your form fields like inputs, labels, etc. go here -->
    <input type="text" name="exampleField" />
    <button type="submit">Submit</button>
  </div>

  </div>
</form>
</div>
</div>
    );
}
export default App;