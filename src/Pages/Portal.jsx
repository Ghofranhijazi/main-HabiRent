import { useState, useEffect } from "react";
import ApartmentCard from "../Component/ApartmentCard ";
import Userprofile from "../Pages/Userprofile";
import Rentingrequest from "../Component/RentingRequest ";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Portal = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Owner Profile");
  const navigate = useNavigate();

  // ✅ جلب بيانات المستخدم من Redux
  const user = useSelector((state) => state.auth.user);

  // ✅ التحقق من أن المستخدم هو Landlord فقط
  useEffect(() => {
    if (!user) {
      navigate("/Login"); // ✅ إعادة التوجيه إلى تسجيل الدخول إذا لم يكن هناك مستخدم مسجل
    } else if (user.role !== "landlord") {
      navigate("/"); // ✅ إعادة التوجيه إلى الصفحة الرئيسية إذا لم يكن المستخدم Landlord
    }
  }, [user, navigate]);

  // ✅ إذا لم يتم تحميل بيانات المستخدم بعد، عرض رسالة "Loading..."
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">🔄 Loading...</p>
      </div>
    );
  }

  // Function to handle tab clicks
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  /*************abartment card********************************************************************** */

  // Sample data for apartments
  const apartments = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300",
      title: "Cozy Studio Apartment",
      description: "A beautiful studio apartment in the heart of the city.",
      price: 1200,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x300",
      title: "Modern 2-Bedroom Apartment",
      description: "Spacious and modern apartment with great views.",
      price: 2000,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x300",
      title: "Luxury Penthouse",
      description: "A luxurious penthouse with a private pool.",
      price: 5000,
    },
  ];

  /*************abartment card********************************************************************** */

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Area with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-60 bg-white shadow-md min-h-screen">
          <div className="flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="px-4 py-6 text-center border-b">
                <h1 className="text-xl font-bold leading-none">
                  <span className="text-[#EC8305]">Owner </span>Dashboard
                </h1>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className={`flex items-center ${
                        activeTab === "Owner Profile"
                          ? "bg-yellow-200 text-yellow-900"
                          : "bg-white hover:bg-yellow-50 text-gray-900"
                      } rounded-xl font-bold text-sm py-3 px-4`}
                      onClick={() => handleTabClick("Owner Profile")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                      </svg>
                      Owner Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className={`flex items-center ${
                        activeTab === "Owner Property"
                          ? "bg-yellow-200 text-yellow-900"
                          : "bg-white hover:bg-yellow-50 text-gray-900"
                      } rounded-xl font-bold text-sm py-3 px-4`}
                      onClick={() => handleTabClick("Owner Property")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                      </svg>
                      Owner Property
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className={`flex items-center ${
                        activeTab === "Renting Request"
                          ? "bg-yellow-200 text-yellow-900"
                          : "bg-white hover:bg-yellow-50 text-gray-900"
                      } rounded-xl font-bold text-sm py-3 px-4`}
                      onClick={() => handleTabClick("Renting Request")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                      </svg>
                      Renting Request
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className={`flex items-center ${
                        activeTab === "Calendar"
                          ? "bg-yellow-200 text-yellow-900"
                          : "bg-white hover:bg-yellow-50 text-gray-900"
                      } rounded-xl font-bold text-sm py-3 px-4`}
                      onClick={() => handleTabClick("Calendar")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="text-lg mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
                      Calendar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <button
                type="button"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className=""
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Conditional Rendering Based on Active Tab */}
          {activeTab === "Owner Profile" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Owner Profile</h2>
              <Userprofile />
            </div>
          )}
          {activeTab === "Owner Property" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-700">
                Owner Property
              </h2>

              <br></br>
              <ApartmentCard />
            </div>
          )}
          {activeTab === "Renting Request" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Renting Request</h2>

              <br></br>
              <Rentingrequest />
            </div>
          )}
          {activeTab === "Calendar" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Calendar</h2>
              <p>This is the Calendar content.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Portal;
