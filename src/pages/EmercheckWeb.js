import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./EmercheckWeb.module.css";
import React,{useEffect, useState} from 'react'
import { Map,GeolocateControl,Marker } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css";
import axios from 'axios';
const EmercheckWeb = () => {
  const navigate = useNavigate();

  const onDashboardButtonClick = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onEllipseIcon2Click = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onTrackNowButtonClick = useCallback(() => {
    // Please sync "tracknow-web" to the project
  }, []);

  const onOfficerAnalysisButtonClick = useCallback(() => {
    navigate("/OfficerAnalysisWeb");
  }, [navigate]);

  const onAddProfileButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);
  
  const onEmergencyAlertButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);
  const [lat,setLat] = useState()
  const [lng,setLng] = useState()
  const [arbitary,setArbitary] = useState({longitude:0,latitude:0})
  const [coordinates,setCoordinates] = useState([])
  const [toRender,setToRender] = useState(false)
  const [emerPoints,setEmerPoints] = useState([])
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
    })
    
    async function addEmergencyCheck() {
      const checkpointsemer = await axios.get('http://172.16.200.150:3000/fetchemergency/12345/')
      
      console.log(checkpointsemer);
      setEmerPoints(checkpointsemer.data)
    }
    addEmergencyCheck()
  },[lng,lat,coordinates])

  function addMarker(e) {
   let coord = coordinates;
   coord.push([e.lngLat.lng,e.lngLat.lat])
   setCoordinates(coord)
   console.log(coordinates)
   setToRender(prevState => !prevState)
  }

  function changeArbitary(e) {
    if(coordinates.length) {
      let aux = coordinates;
      console.log(aux)
      aux.pop()
      setCoordinates(aux)
    }
    setArbitary({
     longitude: e.lngLat.lng,
     latitude: e.lngLat.lat
    })
    addMarker(e)
  }

  function setCheckPoint(){
    // creating an object to send
    let des = document.getElementById('text-area').value
    let checkpoint = {
      latitude: arbitary.latitude,
      longitude: arbitary.longitude,
      description: des
    }
    console.log(checkpoint)
    // end point to store this
    let prevEmerCheck = emerPoints;
    prevEmerCheck.push(checkpoint)
    setEmerPoints(prevEmerCheck)
    console.log(emerPoints)
    axios.post('http://172.16.200.150:3000/addemergency/12345',emerPoints)
  }

  function clicked(e) {
    console.log(e);
  }

  const searchLocation = async() => {
    let locationName = document.getElementById('search').value
    const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?accsess_token=pk.eyJ1IjoiZ2FudGhlci03NyIsImEiOiJjbDloeXI4dWwwa2swM3ZvMDM0ZDN0emR5In0.3EWcLIvaQ9-yd6cjJQq5cQ`)
    const location = result.data.features[0].checkpointsemer

    console.log(location)
  }

  // searchLocation()

  return (
    <div className={styles.emercheckWebDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.icons8Analytics301}
        alt=""
        src="../icons8analytics30-1@2x.png"
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <Button
        className={styles.dashboardButton}
        sx={{ width: 119 }}
        variant="text"
        color="secondary"
        href="/homedashboardweb"
        onClick={onDashboardButtonClick}
      >
        Dashboard
      </Button>
      <img
        className={styles.icons8DashboardLayout481}
        alt=""
        src="../icons8dashboardlayout48-1@2x.png"
      />
      <div className={styles.groupDiv}>
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-3.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-4.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-6.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-5.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-7.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-8.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-14.svg" />
      <Button
        className={styles.trackNowButton}
        sx={{ width: 134 }}
        variant="text"
        color="secondary"
        href="/tracknowweb"
        onClick={onTrackNowButtonClick}
      >
        Track now
      </Button>
      <img
        className={styles.icons8Dashboard481}
        alt=""
        src="../icons8dashboard48-1@2x.png"
      />
      <Button
        className={styles.officerAnalysisButton}
        sx={{ width: 157 }}
        variant="text"
        color="secondary"
        href="/OfficerAnalysisWeb"
        onClick={onOfficerAnalysisButtonClick}
      >
        Officer Analysis
      </Button>
      <div className={styles.emerCheckDiv}>Emer-Check</div>
      <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      />
      <Button
        className={styles.addProfileButton}
        sx={{ width: 112 }}
        variant="text"
        color="secondary"
        href="/AddProfileWeb"
        onClick={onAddProfileButtonClick}
      >
        Add Profile
      </Button>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group.svg" />
      
      (lng && <div className={styles.contaimer}>
      
      <Map id="my-map"
        mapboxAccessToken="pk.eyJ1IjoiZ2FudGhlci03NyIsImEiOiJjbDloeXI4dWwwa2swM3ZvMDM0ZDN0emR5In0.3EWcLIvaQ9-yd6cjJQq5cQ"
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 8,
        }}
        style={{
            width: '600px',
            height: '500px',
            display:'flex',
            flexDirection:'column'
        }}
        onClick={e=>changeArbitary(e)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {(toRender || !toRender)&&
            coordinates.map((ele)=>{
                return <Marker 
                onClick={e=>clicked(e)}
                longitude={ele[0]}
                latitude={ele[1]}
                />
            })
        }
        {
          (emerPoints && emerPoints.map(ele=>{
            return <Marker 
            longitude={ele.longitude}
            latitude = {ele.latitude}
            color='red'
            />
          }))
        }
      </Map>
        
     <div className={styles.locationbox}>
        <div className='heaading'>Add Emergency Chechkpoint</div>
        <div className='coordinates'>
          <div>longitude:{arbitary.longitude}</div>
          <div>latitude:{arbitary.latitude}</div>
        </div>
        <div className='desciption'>
          <textarea name="" id="text-area" cols="30" rows="10" placeholder='word limit : 20 words'></textarea>
        </div>
        <button onClick={e=>setCheckPoint()}>create checkpoint</button>
        <div>
          <div>checkpoints</div>
          {emerPoints && emerPoints.map(ele=>{
            return <div>
              {ele[0]}
            </div>
          })}
        </div>
        </div>
        </div>
        </div>
  );
};

export default EmercheckWeb;
