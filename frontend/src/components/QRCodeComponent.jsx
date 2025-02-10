import QRCode from "qrcode.react";

export default function QRCodeComponent({ value }) {
  return (
    <div>
      <h3>Scan Your Ticket</h3>
      <QRCode value={value} size={200} />
    </div>
  );
}
