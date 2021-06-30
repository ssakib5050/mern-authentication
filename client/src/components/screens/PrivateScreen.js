import React from "react";
import axios from "axios";

const PrivateScreen = ({ history }) => {
  const [error, setError] = React.useState("");
  const [privateData, setPrivateData] = React.useState("");

  React.useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, []);
  return error ? (
    <span>{error}</span>
  ) : (
    <>
      <span>{privateData}</span>{" "}
      <button
        onClick={() => {
          localStorage.removeItem("authToken");
          history.push("/login");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default PrivateScreen;
