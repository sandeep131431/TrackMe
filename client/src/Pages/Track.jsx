import { useParams } from "react-router-dom";
import { useState } from "react";

function Track() {
  const { id } = useParams();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const shareLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const response = await fetch(
            "https://track-me-beta.vercel.app/api/location",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                linkId: id,
                latitude,
                longitude,
              }),
            }
          );

          const data = await response.json();

          console.log(data);

          setMessage("✅ Location shared successfully.");
        } catch (error) {
          console.error(error);
          setMessage("❌ Failed to share location.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error(error);
        setLoading(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setMessage("❌ Location permission denied.");
            break;
          case error.POSITION_UNAVAILABLE:
            setMessage("❌ Location unavailable.");
            break;
          case error.TIMEOUT:
            setMessage("❌ Location request timed out.");
            break;
          default:
            setMessage("❌ Unable to get location.");
        }
      }
    );
  };

  return (
    <div className="container">
      <h1>📍 Share Your Location</h1>

      <h3>Tracking ID: {id}</h3>

      <button onClick={shareLocation} disabled={loading}>
        {loading ? "Sharing..." : "Share Location"}
      </button>

      <br />
      <br />

      <p>{message}</p>
    </div>
  );
}

export default Track;