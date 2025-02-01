import { useEffect, useState } from "react";
import supabase from "../supabase";
import Chat from "./Chat";
import Login from "./Auth/Login";
import { Link } from "react-router-dom";

function MessagesViewer() {
  const [messages, setMessages] = useState([]); // State to store messages
  const authorized = sessionStorage.getItem("authToken");

  const fetchMessages = async () => {
    let { data, error } = await supabase
      .from("Mohameed-Nada-Messages")
      .select("*");

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      console.log(data);

      setMessages(data); // Store the fetched messages in state
    }
  };

  useEffect(() => {
    fetchMessages();
    console.log(messages);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      {authorized ? (
        <Chat data={messages} />
      ) : (
        <>
          <p> Nice Try 😊 but you must Login to see the messages </p>
          <Link to="/private-login" className="text-blue-500">
            Click here to Login
          </Link>
        </>
      )}
    </div>
  );
}

export default MessagesViewer;
