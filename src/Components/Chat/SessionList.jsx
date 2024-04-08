import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../Common/AppContext";
import { zenithFunctions } from "../../assets/Config/zenithFunctions";
import "./Chat.css"; // Assuming you've renamed Chat.css to SessionsList.css

export default function SessionsList() {
    const { theme, bgColors } = useContext(ThemeContext);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        // Fetch conversations when the component mounts
        const fetchedConversations = zenithFunctions.getAllConversations();
        console.log(fetchedConversations);
        setConversations(fetchedConversations);
    }, []);

    return (
        <div className="w-full max-w-[520px] m-auto h-[800px] relative flex items-center justify-center">
            <div className="flex-col justify-start items-center gap-6 inline-flex">
                <table className="min-w-[1100px] w-full " style={{
                    color: bgColors[`${theme}-primary-bg-color-8`]
                }}>
                    <thead style={{background: theme === "dark" ? 'transparent' : '#F0F0F0'}}>
                        <tr className="text-sm font-medium font-['Figtree']" style={{borderBottom: `1px solid ${bgColors[`${theme}-primary-border-color`]}`}}>
                            <th className="w-[10%] text-center py-[18px] rounded-tl-xl" style={{
                                color: bgColors[`${theme}-color-premitive-grey-9`],
                                background: bgColors[`${theme}-primary-bg-color-9`]
                            }}>
                                Sr
                            </th>
                            <th className="w-[90%] text-center py-[18px] rounded-tr-xl" style={{
                                color: bgColors[`${theme}-color-premitive-grey-9`],
                                background: bgColors[`${theme}-primary-bg-color-9`]
                            }}>
                                Conversation
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { conversations?.length != 0 ? 
                            conversations.map((conversation, index) => (
                                <tr className="text-[#4C4C4C]" style={{borderBottom: `1px solid ${bgColors[`${theme}-primary-border-color`]}`}}>
                                    <td className="w-[10%] px-6 py-4 text-[#455A64] text-center" style={{color: bgColors[`${theme}-color-premitive-grey-9`]}}>
                                        {index + 1}
                                    </td>
                                    <td className="w-[90%] px-6 py-4 text-[#455A64] text-center" style={{color: bgColors[`${theme}-color-premitive-grey-9`]}}>
                                        {conversation[0].content}
                                    </td>
                                </tr>
                            )) : (
                                <tr className="w-full text-center mt-20 text-white">
                                    <td>
                                        Start your first conversation!
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}