// eslint-disable
import React, { useState, useEffect } from "react";
// import ChatListener from "../components/chatListener"; // chat listener function

const Index = () => {
    const apiUrl = "https://jvjr-api-v1-ewd7j5lnja-uc.a.run.app/chat";
    const endpoint = "/basic-chat";
    const userName = "Team2";
    const pass = "AAI520"; 
    const theme = "pink";
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [temperature, setTemperature] = useState(0.5); // Default temperature
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000); // 3 seconds
            return () => clearTimeout(timer); // cleanup timer on component unmount
        }
    }, [error]);

    const sendMessage = async () => {
        // Validate temperature input
        if (temperature < 0.01 || temperature > 1) {
            setError("Temperature must be between 0.01 and 1");
            return;
        }
    
        if (inputValue.trim() === "") {
            // Don't send empty messages
            return;
        }
    
        // Create a new user message
        const userMessage = {
            role: "user",
            content: inputValue,
        };
    
        // Include the last 5 messages in the request
        const lastFiveMessages = messages.slice(-5);
    
        // Add user's message to chat history
        setMessages([...messages, userMessage]);
    
        try {
            const response = await fetch(apiUrl + endpoint, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${btoa(`${userName}:${pass}`)}` // Basic Auth
                },
                body: JSON.stringify({
                    messages: [...lastFiveMessages, userMessage],
                    stream: true,
                    temperature: temperature,
                    model_name: "gpt-3.5-turbo"
                }),
            });
    
            const data = await response.text();
            if (data) {
                // Create a new assistant message
                const assistantMessage = {
                    role: "assistant",
                    content: data, // Set the response data as content
                };
                setMessages([...messages, userMessage, assistantMessage]);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setError("Failed to send the message. Please try again.");
        }
    
        setInputValue(""); // Reset the input field
    };
    
    return (
        <div className={`bg-${theme}-50 h-full md:h-screen flex-col flex justify-center p-6 items-center `}>
            <div className={`text-4xl text-${theme}-300 mb-2`}>
                Natural Language Processing Final
            </div>
            <div className={`border-double border-4 border-${theme}-300 p-4 rounded-md flex flex-1 w-full h-full`}>
                <div className="flex flex-col w-1/3 space-y-4 h-full ">
                    <div className={`bg-${theme}-300 p-4 rounded-md overflow-y-auto h-4/5 chat-history`}>
                        <span className={`text-center text-2xl text-${theme}-50 inline-block w-full p-2`}>
                            Chat History
                        </span>
                        {/* / eslint-disable */}
                        {messages.map((message, index) => (
                            <div key={index} className={`my-2 ${message.role === "user" ? "text-right" : ""}`}>
                                <div className={`p-2 rounded-md ${message.role === "user" ? `bg-${theme}-400 text-white self-end` : "bg-white text-black self-start"}`}>
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`bg-${theme}-300 p-4 rounded-md h-1/5 text-center`}>
                        <span className={` text-2xl text-${theme}-50 inline-block w-full p-2`}>
                            Settings
                        </span>
                        <div className="mt-2 ">
                            <label className={`text-${theme}-50 pr-5`}>Temperature</label>
                            <input
                                type="number"
                                step="0.01"
                                min="0.01"
                                max="1"
                                value={temperature}
                                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                className={`p-2 rounded-md text-${theme}-800 p-0`}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-4"></div>

                <div className={`border-4 border-${theme}-300 rounded-md flex-grow flex flex-col`}>
                    <div className="flex-1 overflow-y-auto text-center text-4xl ">
                        <span className={`bg-${theme}-300 text-${theme}-50 inline-block w-full p-2`}>
                            Richard Nixon
                        </span>
                        {/* New div for displaying messages */}
                        <div className="message-container">
                            {/* Map through messages and render them here */}
                            {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`p-2 m-2 my-4 rounded-md text-base max-w-xs text-${theme}-50 ${
                                    message.role === "user"
                                        ? `bg-${theme}-400 self-end`
                                        : `bg-${theme}-300 self-start`
                                }`}
                                style={{ clear: "both", float: message.role === "user" ? "right" : "left" }}
                            >
                                {message.content}
                            </div>
                        ))}

                        </div>

                    </div>
                    <div className="mt-4 p-4 flex items-center justify-between"> {/* Use justify-between to place text box and send button next to each other */}
                        <textarea
                            className="p-2 rounded-md flex-grow"
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            }}
                        ></textarea>
                        <button className={`bg-${theme}-400 text-white p-2 rounded-md ml-2`} onClick={sendMessage}>
                            Send
                        </button>
                    </div>
                </div>

                {/* Error message */}
                {error && <div className="absolute top-0 left-0 right-0 mt-4 p-4 text-center text-white bg-red-500 opacity-90 transition-opacity duration-3000 ease-out">{error}</div>}
            </div>
        </div>
    );    
};

export default Index;
