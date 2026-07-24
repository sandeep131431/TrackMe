import { useState } from "react";

function Home() {
  const [link, setLink] = useState("");
  const [linkId, setLinkId] = useState("");

  // Generate Link
  const generateLink = async () => {
    try {
      const response = await fetch("https://track-me-gweb.vercel.app/api/link", {
        method: "POST",
      });

      const data = await response.json();

      setLink(data.url);
      setLinkId(data.id);
    } catch (error) {
      console.log(error);
      alert("Failed to generate link");
    }
  };

  // Copy Link
  const copyLink = () => {
    navigator.clipboard.writeText(link);
    alert("Link Copied");
  };

  // Share WhatsApp
  const shareWhatsapp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(link)}`,
      "_blank"
    );
  };

  // Get Location
  const getLocation = async () => {
    if (!linkId) {
      alert("Please generate a link first.");
      return;
    }

    try {
      const response = await fetch(
        `https://track-me-gweb.vercel.app/api/location/${linkId}`
      );
      
      if (response.status === 404) {
        alert("Location Not Found");
        return;
      }

      const data = await response.json();

      console.log(data);

      window.open(
        `https://www.google.com/maps?q=${data.latitude},${data.longitude}`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <h1>📍 Location Tracker</h1>

      <button onClick={generateLink}>
        Generate Link
      </button>

      <br />
      <br />



      {link && (
        <>
          <br />
          <br />

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>

          <br />
          <br />

          <button onClick={copyLink}>
            Copy Link
          </button>

          <button onClick={shareWhatsapp}>
            Share on WhatsApp
          </button>

          <button onClick={getLocation}>
             Get Location
          </button>
        </>
      )}
    </div>
  );
}

export default Home;