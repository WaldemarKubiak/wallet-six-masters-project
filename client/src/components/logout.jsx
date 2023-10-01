import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/auth-selectors";
import axios from "axios";

const Logout = () => {
  const [[isLoggedOut, setIsLoggedOut]] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.get(
          "https://wallet-project-4dhb.onrender.com/api/users/logout",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 204) {
          setIsLoggedOut(true);
          // You might want to clear the token from your state or context here
        } else {
          console.error("Logout failed:", response.data);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    logout();
  }, []);

  return (
    <div>
      {isLoggedOut ? (
        <p>You have been successfully logged out.</p>
      ) : (
        <p>Logging out...</p>
      )}
    </div>
  );
};

export default Logout;
