import React, { useState } from "react";
import {
  FaWind,
  FaBuilding,
  FaHandshake,
  FaBus,
  FaCar,
  FaGraduationCap,
  FaChartLine,
  FaTemperatureHigh,
  FaHome,
  FaFileContract,
  FaDollarSign,
  FaBriefcase,
  FaUsers,
  FaTree,
  FaRoad,
  FaPiggyBank,
  FaCity,
  FaSubway,
  FaShieldAlt,
  FaTint,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";
import { useCategory } from "../Context/CategoryContext";
import TabViewer from "./TabViewer";
import { GiSuspensionBridge } from "react-icons/gi";
import {
  SmileOutlined,
  LikeOutlined,
  MehOutlined,
  FrownOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { IoMdArrowBack } from "react-icons/io";

// Update these items based on the markdown files
const items = [
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Congestion",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Congestion",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Employment",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Employment",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Reliability",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Reliability",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Freight",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Freight",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Accessibility",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Accessibility",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Safety",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Safety",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Pavements",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Pavements",
  },
  {
    icon: <FaTint size={40} color="#ffffff" />,
    trendIcon: <FrownOutlined size={40} color="#ffffff" />,
    trendDetails: "2.8% decrease",
    title: "Congestion-environment",
    details: "in water supporting aquatic life",
    markdownPath: "/markdown/Congestion-1",
  },
];

// Update categoryMapping to match the folders exactly
const categoryMapping = {
  economicdevelopment: ["Congestion", "Employment", "Reliability", "Freight"],
  equity: ["Accessibility"],
  safety: ["Safety"],
  systemmanagement: ["Pavements"],
  environment: ["Congestion-environment"],
};

// First, add this mapping near the top of the file, after the items array
const trendTypeMapping = {
  "very-good": <SmileOutlined style={{ fontSize: "40px" }} />,
  good: <LikeOutlined style={{ fontSize: "40px" }} />,
  neutral: <MehOutlined style={{ fontSize: "40px" }} />,
  "not-good": <FrownOutlined style={{ fontSize: "40px" }} />,
  poor: <DislikeOutlined style={{ fontSize: "40px" }} />,
};

function MainContent() {
  const { selectedCategory, selectedTrend, setIsSidebarVisible } =
    useCategory();
  const [selectedPath, setSelectedPath] = useState(null);

  const isItemActive = (item) => {
    if (!selectedCategory && !selectedTrend) return true;

    if (
      selectedCategory &&
      !categoryMapping[selectedCategory]?.includes(item.title)
    ) {
      return false;
    }

    if (selectedTrend) {
      // Convert trendIcon to string for comparison
      const itemTrendType = item.trendType;
      return itemTrendType === selectedTrend;
    }

    return true;
  };

  const getItemBackground = (title) => {
    if (!selectedCategory) return "#008085"; // Default color

    // Check if the item belongs to the selected category
    const isActive = categoryMapping[selectedCategory]?.includes(title);
    if (!isActive) return "#4a5568"; // Inactive color

    // Category-specific colors
    const colors = {
      economicdevelopment: "#762a83",
      equity: "#9970ab",
      safety: "#c2a5cf",
      systemmanagement: "#e7d4e8",
      environment: "#FFFFA6",
    };

    return colors[selectedCategory];
  };

  // Update the getTextAndIconColor function
  const getTextAndIconColor = (title) => {
    if (!selectedCategory) return "#ffffff";

    // Check if the item belongs to the selected category
    const isActive = categoryMapping[selectedCategory]?.includes(title);
    if (!isActive) return "#9CA3AF";

    // Light background colors that need dark text
    const lightBackgrounds = ["environment", "community", "resilience"];
    return lightBackgrounds.includes(selectedCategory) ? "#000000" : "#ffffff";
  };

  // Update handleBoxClick to hide sidebar
  const handleBoxClick = (markdownPath) => {
    setSelectedPath(markdownPath);
    setIsSidebarVisible(false);
  };

  // Add back button handler
  const handleBack = () => {
    setSelectedPath(null);
    setIsSidebarVisible(true);
  };

  if (selectedPath) {
    const selectedItem = items.find(
      (item) => item.markdownPath === selectedPath
    );

    return (
      <div className="flex-grow bg-gray-900 ">
        <button
          onClick={handleBack}
          className="m-4 px-4 py-2  sticky top-20 md:top-30 z-40 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          <div className="flex items-center space-x-2 font-semibold cursor-pointer">
            <IoMdArrowBack />
            <span>To Dashboard</span>
          </div>
        </button>
        <TabViewer
          folderPath={selectedPath}
          trendIcon={selectedItem.trendIcon}
          trendDetails={selectedItem.trendDetails}
          details={selectedItem.details}
          title={selectedItem.title}
        />
      </div>
    );
  }

  // Update the main return statement to include overflow styling
  return (
    <div className="md:ml-[15%] md:flex-[85%] bg-gray-900 p-4 md:h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-8 w-full max-w-full">
        {items.map((item, idx) => (
          <div
            onClick={() => handleBoxClick(item.markdownPath)}
            className={`layout-item rounded-lg shadow-md ${
              !isItemActive(item) ? "pointer-events-none opacity-50" : ""
            } cursor-pointer`}
            key={idx}
          >
            <div className="flip-card-inner text-center h-56">
              <div
                className="flip-card-front"
                style={{
                  backgroundColor: getItemBackground(item.title),
                  color: getTextAndIconColor(item.title),
                }}
              >
                {React.cloneElement(item.icon, {
                  color: getTextAndIconColor(item.title),
                  style: { color: getTextAndIconColor(item.title) },
                })}
                <div className="mt-4 text-lg font-semibold hover-text">
                  {item.title}
                </div>
              </div>
              <div
                className="flip-card-back"
                style={{
                  backgroundColor: getItemBackground(item.title),
                  color: getTextAndIconColor(item.title),
                }}
              >
                {React.cloneElement(item.trendIcon, {
                  style: {
                    fontSize: "40px",
                    color: getTextAndIconColor(item.title),
                  },
                })}
                <span className="font-bold">{item.trendDetails}</span>
                <div className="mt-4 text-base text-center">{item.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
