import React from "react";
import QRCodeGenerator from "./QRCodeGenerator";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded">
        <h1 className="text-xl font-bold text-center mb-4">
          Contact QR Code Generator
        </h1>
        <QRCodeGenerator />
      </div>
    </div>
  );
}

export default App;
