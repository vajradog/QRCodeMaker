import React, { useState } from "react";
import QRCode from "qrcode.react";
import ContactForm from "./ContactForm";

function QRCodeGenerator() {
  const [qrValue, setQrValue] = useState("");

  const handleSubmit = (event, contact) => {
    event.preventDefault();
    const vCardData = createVCard(contact);
    setQrValue(vCardData);
  };

  const createVCard = (contact) => {
    return `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.firstName} ${contact.lastName}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nURL:${contact.url}\nADR:${contact.address}\nNOTE:${contact.notes}\nX-SOCIALPROFILE:${contact.socialProfiles}\nEND:VCARD`;
  };

  return (
    <div className="flex flex-col items-center p-6">
      <ContactForm onSubmit={handleSubmit} />
      {qrValue && (
        <div className="mt-6">
          <QRCode value={qrValue} />
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
