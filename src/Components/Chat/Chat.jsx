import { useContext, useState } from "react";
import { mainConfig } from "../../assets/Config/appConfig";
import { ThemeContext } from "../Common/AppContext";
import Siriwave from "react-siriwave";
import microphone from "../../assets/Images/microphone.svg";
import end from "../../assets/Images/end.svg";
import play from "../../assets/Images/play.svg";
import "./Chat.css"
import { zenithFunctions } from "../../assets/Config/zenithFunctions";

export default function Chat() {
    const { theme, bgColors, appConfig } = useContext(ThemeContext);
    const [isSessionActive, setIsSessionActive] = useState(false); // State to manage session status

    // Update startSession method to also control the Siriwave animation
    const startSession = () => {
      zenithFunctions.startSession(); // Original start session functionality
      setIsSessionActive(true); // Enable the Siriwave animation
    };

    // Update endSession method to also control the Siriwave animation
    const endSession = () => {
      zenithFunctions.endSession(); // Original end session functionality
      setIsSessionActive(false); // Disable the Siriwave animation
    };

    const ballClass = isSessionActive ? "Ball Ball-spinning" : "Ball";

    return (
        <div className="w-full max-w-[520px] m-auto h-[800px] relative flex items-center justify-center">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
               Ask Zenith Anything!
               <br />
                <div className="flex-col justify-start items-center gap-1.5 flex">

                    <div className=" text-center text-neutral-500 text-sm font-normal font-['Figtree'] leading-tight">
                        <div style={{zIndex:1, position: 'absolute', top:0, left:0, paddingTop: '100px'}}>
                          <div style = {{fontSize:"40px", color:"gray", paddingBottom:"30px", fontWeight: '3'}}> Let Zenith Help You ✨ </div>
                          <div className={ballClass}
                            onClick={startSession}
                           />
                        </div>
                        <div style={{zIndex:2, position: 'absolute',  top:3, left:0, paddingTop: '385px'}}>
                            <Siriwave
                              color="#3f51b5"
                              speed="0.025"
                              frequency= "5"
                              amplitude="0.6"
                              autostart={isSessionActive}
                            />
                          </div>
                    </div>

                </div>
                <div style={{display:"flex", paddingTop:"1000px",  paddingLeft:"100px"}}>
                            <img src={microphone} onClick={startSession} style={{paddingLeft:"9px"}}/>
                            <img src={play}  style={{paddingLeft:"9px"}}/>
                            <img src={end} onClick={endSession} style={{paddingLeft:"22px"}}/>

                </div>
            </div>
        </div>
    );
}
