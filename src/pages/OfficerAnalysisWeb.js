import { useCallback ,useState} from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./OfficerAnalysisWeb.module.css";

const OfficerAnalysisWeb = () => {
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

  const onEmerCheckButtonClick = useCallback(() => {
    // Please sync "emercheck-web" to the project
  }, []);

  const onAddProfileButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/OfficerAnalysisWeb2");
  }, [navigate]);
  const [userRegistration,setUserRegistration]= useState({
    fullname1:"",
    idnumber1:"",
    date1:""
  });
  const [records,setRecords]=useState([]);
  const handleInput = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    setUserRegistration({...userRegistration,[name]:value});
  }
 const handleSubmit =(e) => {
      e.preventDefault();
      const newRecord = {...userRegistration, id: new Date().getTime().toString() }
      console.log(records);
      setRecords([...records,newRecord]);

      setUserRegistration({fullname1: "",idnumber1:"",date1:""});
 }
  return (
    <div className={styles.officerAnalysisWebDiv}>
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
      <div className={styles.officerAnalysisDiv}>Officer Analysis</div>
      <Button
        className={styles.emerCheckButton}
        sx={{ width: 129 }}
        variant="text"
        color="secondary"
        href="/emercheckweb"
        onClick={onEmerCheckButtonClick}
      >
        Emer-Check
      </Button>
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
      <div className={styles.groupDiv1}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-34.svg"
        />
        <img className={styles.lineIcon} alt="" src="../line-11.svg" />
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv4} />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv5} />
        </div>
        <div className={styles.officerAnalysisDiv1}>Officer Analysis</div>
      </div>
      <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      <form action="" onSubmit={handleSubmit} className={styles.grp1}>
        <div >
          <label htmlFor="fullname1">Full Name</label>
          <input  type="text" autocomplete="off"
          value ={userRegistration.fullname1}
          onChange={handleInput}
          name="fullname1" id="fullname1"/>
        </div>
        <div >
          <label htmlFor="idnumber1">ID Number</label>
          <input type="text"autocomplete="off"
          value ={userRegistration.idnumber1}
          onChange={handleInput}
           name="idnumber1" id="idnumber1"/>
        </div>
        <div >
          <label htmlFor="date1">Date</label>
          <input type="date" autocomplete="off"
          value ={userRegistration.date1}
          onChange={handleInput}
          name="date1" id="date1"/>
        </div>
        <Button
        className={styles.groupButton}
        type = "submit"
      >
        Get Analysis
      </Button>
      </form>
      <div>
         {
          records.map((curElem)=>{
            return(
              <div className="showDataStyle" key={curElem.id}>
                <p>{curElem.fullname1}</p>
                <p>{curElem.idnumber1}</p>
                <p>{curElem.date1}</p>
              </div>
            )
          })
         }
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv6} />
      </div>
    </div>
  );
};

export default OfficerAnalysisWeb;
