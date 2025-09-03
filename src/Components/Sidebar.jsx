import React, { useState } from "react";
import { Select } from "antd";
import { GrPowerCycle } from "react-icons/gr";
import {
  BarChartOutlined,
  SafetyOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  CarOutlined,
  BankOutlined,
  SmileOutlined,
  LikeOutlined,
  MehOutlined,
  FrownOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { useCategory } from "../Context/CategoryContext";

function Sidebar() {
  const { Option } = Select;
  const {
    setSelectedCategory,
    setSelectedTrend,
    selectedCategory,
    selectedTrend,
    isSidebarVisible,
  } = useCategory();

  // Add early return if sidebar should be hidden
  if (!isSidebarVisible) {
    return null;
  }

  const [selectedFilter, setSelectedFilter] = useState("category");

  const handleCategoryClick = (category) => {
    const lowercaseCategory = category.toLowerCase();
    // If clicking the same category that's already selected, clear the filter
    if (lowercaseCategory === selectedCategory) {
      setSelectedCategory(null);
    } else {
      // If clicking a different category, set it as the new filter
      setSelectedCategory(lowercaseCategory);
    }
  };

  const handleTrendClick = (trend) => {
    if (trend === selectedTrend) {
      setSelectedTrend(null);
    } else {
      setSelectedTrend(trend);
      setSelectedCategory(null);
    }
  };

  const renderContent = () => {
    if (selectedFilter === "category") {
      return (
        <>
          <div
            onClick={() => handleCategoryClick("economicdevelopment")}
            className={`${categoryClass} bg-[#762a83]  hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#762a83] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <GrPowerCycle style={{ fontSize: "24px", color: "#ffffff" }} />
            <span className="text-white text-base ml-2">
              Economic Development
            </span>
          </div>
          <div
            onClick={() => handleCategoryClick("equity")}
            className={`${categoryClass} bg-[#9970ab] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#9970ab] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <BarChartOutlined style={{ fontSize: "24px", color: "#000000" }} />
            <span className="text-black text-base ml-2">
              Equity/Accessibility
            </span>
          </div>
          <div
            onClick={() => handleCategoryClick("safety")}
            className={`${categoryClass} bg-[#c2a5cf] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#c2a5cf] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <SafetyOutlined style={{ fontSize: "24px", color: "#000000" }} />
            <span className="text-black text-base ml-2">Safety</span>
          </div>
          <div
            onClick={() => handleCategoryClick("systemmanagement")}
            className={`${categoryClass} bg-[#FFFFA6] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#FFFFA6] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <EnvironmentOutlined
              style={{ fontSize: "24px", color: "#000000" }}
            />
            <span className="text-black text-base ml-2">System Management</span>
          </div>
          <div
            onClick={() => handleCategoryClick("environment")}
            className={`${categoryClass} bg-[#a6dba0] hover:shadow-[0_4px_15px_rgba(251,191,36,0.5)] hover:bg-[#a6dba0] cursor-pointer transition-all duration-100 ease-in-out mx-2 md:mx-0`}
          >
            <TeamOutlined style={{ fontSize: "24px", color: "#000000" }} />
            <span className="text-black text-base ml-2">Environment</span>
          </div>
        </>
      );
    } else {
      return renderTrendContent();
    }
  };

  const renderTrendContent = () => {
    return (
      <>
        <div
          onClick={() => handleTrendClick("very-good")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <SmileOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Very Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("good")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <LikeOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("neutral")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <MehOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Neutral</span>
        </div>
        <div
          onClick={() => handleTrendClick("not-good")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <FrownOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Not Good</span>
        </div>
        <div
          onClick={() => handleTrendClick("poor")}
          className={`${trendClass} bg-gray-700 hover:bg-gray-800 cursor-pointer`}
        >
          <DislikeOutlined style={{ fontSize: "24px", color: "#ffffff" }} />
          <span className="text-white text-base ml-2">Poor</span>
        </div>
      </>
    );
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setSelectedCategory(null);
    setSelectedTrend(null);
  };

  return (
    <div className="md:fixed md:top-20 flex mt-[2px] pr-2 flex-col left-0 md:w-[15%] md:h-[calc(100vh-5rem)] bg-white">
      <div className="flex flex-col h-full">
        <div className="text-gray-600 w-full h-full flex flex-col">
          {/* Filter header */}
          <div className="w-full h-[60px] flex px-1 bg-gray-700 items-center justify-center">
            <div className="flex items-center">
              <span className="font-semibold mr-1 text-gray-100 text-[12px]">
                Filter by:
              </span>
              <Select
                defaultValue="category"
                style={{ width: 120 }}
                size="middle"
                className="text-transparent"
                onChange={handleFilterChange}
              >
                <Option value="category">Category</Option>
              </Select>
            </div>
          </div>
          {/* Content container */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-hidden">
            <div className="flex flex-row md:flex-col md:h-[calc(100vh-80px)]">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Update the category and trend classes with smaller dimensions and remove margins
const categoryClass = `
  min-w-[100px] 
  md:min-w-full 
  flex 
  justify-center 
  items-center 
  md:h-[calc((100vh-100px)/7)] 
  my-2
  p-2
`;

const trendClass = `
  min-w-[100px] 
  md:min-w-full 
  flex 
  justify-center 
  items-center 
  md:h-[calc((100vh-100px)/7)] 
  my-2
  p-2
`;

export default Sidebar;
