import React, { createContext, useState } from "react";

const SocketContext = createContext(null);

function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
}

export { SocketContext, SocketProvider };
