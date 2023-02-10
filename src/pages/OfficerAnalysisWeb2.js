import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OfficerAnalysisWeb2.module.css";

const OfficerAnalysisWeb2 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/homedashboardweb");
  }, [navigate]);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/OfficerAnalysisWeb");
  }, [navigate]);

  const onTrackNowTextClick = useCallback(() => {
    navigate("/tracknowweb");
  }, [navigate]);

  const onEmerCheckTextClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);

  const onAddProfileTextClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);

  return (
    <div className={styles.officerAnalysis2Web}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.icons8Analytics301}
        alt=""
        src="../icons8analytics30-1@2x.png"
      />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-35.svg" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.dashboardDiv} onClick={onDashboardTextClick}>
        Dashboard
      </div>
      <img
        className={styles.icons8DashboardLayout481}
        alt=""
        src="../icons8dashboardlayout48-1@2x.png"
      />
      <div className={styles.groupDiv}>
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-32.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-42.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-67.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-57.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-73.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-81.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-142.svg" />
      <div className={styles.trackNowDiv} onClick={onTrackNowTextClick}>
        Track now
      </div>
      <img
        className={styles.icons8Dashboard481}
        alt=""
        src="../icons8dashboard48-1@2x.png"
      />
      <div className={styles.officerAnalysisDiv}>Officer Analysis</div>
      <div className={styles.emerCheckDiv} onClick={onEmerCheckTextClick}>
        Emer-Check
      </div>
      <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      />
      <div className={styles.addProfileDiv} onClick={onAddProfileTextClick}>
        Add Profile
      </div>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group7.svg" />
      <img className={styles.lineIcon} alt="" src="../line-1110.svg" />
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv4} />
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv5} />
      </div>
      <div className={styles.officerAnalysisDiv1}>Officer Analysis</div>
      <img className={styles.lineIcon1} alt="" src="../line-127.svg" />
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv6} />
      </div>
      <b className={styles.may22B}>
        <p className={styles.p}>20</p>
        <p className={styles.p}>May</p>
        <p className={styles.p1}>22</p>
      </b>
      <div className={styles.groupDiv4}>
        <div className={styles.groupDiv5}>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv7} />
            <div className={styles.rectangleDiv8} />
            <div className={styles.rectangleDiv9} />
            <div className={styles.rectangleDiv10} />
            <div className={styles.rectangleDiv11} />
            <div className={styles.rectangleDiv12} />
            <div className={styles.frameDiv}>
              <div className={styles.startTimeDiv}>
                <span>Start</span>
                <span className={styles.span}>{` `}</span>
                <span>time</span>
              </div>
            </div>
            <div className={styles.pMDiv}>11:00 PM</div>
            <div className={styles.pMDiv1}>11:00 PM</div>
            <div className={styles.aMDiv}>11:00 PM</div>
            <div className={styles.pMDiv3}>11:00 PM</div>
            <div className={styles.eNDDiv}>11:00 PM</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv7} />
            <div className={styles.rectangleDiv8} />
            <div className={styles.rectangleDiv9} />
            <div className={styles.rectangleDiv10} />
            <div className={styles.rectangleDiv11} />
            <div className={styles.rectangleDiv12} />
            <div className={styles.frameDiv}>
              <div className={styles.startTimeDiv}>
                <span>Start</span>
                <span className={styles.span}>{` `}</span>
                <span>time</span>
              </div>
            </div>
            <div className={styles.pMDiv}>11:00 PM</div>
            <div className={styles.pMDiv1}>11:55 PM</div>
            <div className={styles.aMDiv}>01:44 AM</div>
            <div className={styles.pMDiv3}>04:10 AM</div>
            <div className={styles.eNDDiv}>{`06:28 AM `}</div>
          </div>
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv7} />
            <div className={styles.rectangleDiv8} />
            <div className={styles.rectangleDiv9} />
            <div className={styles.rectangleDiv10} />
            <div className={styles.rectangleDiv11} />
            <div className={styles.rectangleDiv11} />
            <div className={styles.rectangleDiv12} />
            <div className={styles.frameDiv}>
              <div className={styles.startTimeDiv}>Duration</div>
            </div>
            <div className={styles.pMDiv}>43 mins</div>
            <div className={styles.hr33minsDiv}>1hr 33mins</div>
            <div className={styles.hr16minsDiv}>{`1hr 16mins `}</div>
            <div className={styles.hr10Mins}>2hr 10 mins</div>
            <div className={styles.eNDDiv}>END</div>
          </div>
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv7} />
            <div className={styles.rectangleDiv8} />
            <div className={styles.rectangleDiv9} />
            <div className={styles.rectangleDiv10} />
            <div className={styles.rectangleDiv11} />
            <div className={styles.rectangleDiv12} />
            <div className={styles.frameDiv}>
              <div className={styles.startTimeDiv}>
                <span>StOP</span>
                <span className={styles.span}>{` `}</span>
                <span>time</span>
              </div>
            </div>
            <div className={styles.pMDiv}>11:43 PM</div>
            <div className={styles.pMDiv1}>01:28 AM</div>
            <div className={styles.aMDiv}>03:00 AM</div>
            <div className={styles.pMDiv3}>06:20 AM</div>
            <div className={styles.eNDDiv}>07:00 AM</div>
          </div>
        </div>
      </div>
      <img className={styles.lineIcon2} alt="" src="../line-16.svg" />
      <div className={styles.lineDiv} />
      <b className={styles.fIRReportB}>FIR Report</b>
      <div className={styles.dateAndHourOfOccruence}>
        Date and hour of occruence :
      </div>
      <div className={styles.residenceOfComplainant}>
        Residence of Complainant :
      </div>
      <div className={styles.placeOfOccruence}>Place of occruence :</div>
      <div className={styles.nameAndAddressOfCriminal}>
        Name and address of Criminal :
      </div>
      <div className={styles.proofOfComplain}>Proof of complain :</div>
      <div className={styles.nameOfComplainant}>Name of Complainant :</div>
      <div className={styles.rectangleDiv32} />
      <div className={styles.rectangleDiv33} />
      <div className={styles.rectangleDiv34} />
      <div className={styles.rectangleDiv35} />
      <div className={styles.rectangleDiv36} />
      <div className={styles.rectangleDiv37} />
      <img
        className={styles.untitledDesign1}
        alt=""
        src="../untitled-design-1@2x.png"
      />
    </div>
  );
};

export default OfficerAnalysisWeb2;
