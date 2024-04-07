import { useContext } from "react";
import { mainConfig } from "../../assets/Config/appConfig";
import { ThemeContext } from "../Common/AppContext";
import Siriwave from "react-siriwave";
import "./Chat.css"

export default function Chat() {
    const { theme, bgColors, appConfig } = useContext(ThemeContext);

    return (
        <div className="w-full max-w-[520px] m-auto h-[800px] relative flex items-center justify-center">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
               Ask AI Anything!
                <div className="flex-col justify-start items-center gap-1.5 flex">
                    <div className=" text-center text-neutral-500 text-sm font-normal font-['Figtree'] leading-tight">
                      <div className="Ball" />
                    {/*  <div style={{zIndex: 1, position: relative}}>
                        <Siriwave
                          color="#3f51b5"
                          speed="0.025"
                          frequency= "5"
                          amplitude="0.6"
                          autostart= "true"
                        />
                      </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}
