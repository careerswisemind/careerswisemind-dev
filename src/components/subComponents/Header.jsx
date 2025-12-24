import React, { useState, useRef, useEffect } from "react";
import FancyButton from "../uiComponents/FancyButton";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  const dropdownRef = useRef(null);

  const menuItems = [
    {
      label: "Classroom Courses",
      link: "#",
      submenu: {
        title: "Classroom Courses",
        items: [
          {
            label: "NEET",
            children: ["Class 11th", "Class 12th", "Class 12th Plus","Class 11th", "Class 12th", "Class 12th Plus"],
          },
          {
            label: "JEE",
            children: ["Class 11th", "Class 12th", "Class 12th Plus"],
          },
        ],
      },
    },
    { label: "Online Courses", link: "#" },
    { label: "Test Series", link: "#" },
    { label: "Results", link: "#" },
    { label: "Study Materials", link: "#" },
    { label: "Scholarships", link: "#", badge: "NEW" },
    { label: "ALLEN E-Store", link: "#" },
    { label: "More", link: "#" },
  ];

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu(null);
        setActiveSub(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuEnter = (index) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
      setActiveSub(null);
    }, 200);
    setLeaveTimeout(timeout);
  };

  const handleSubmenuEnter = (index) => {
    setActiveSub(index);
  };

  const handleSubmenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSub(null);
    }, 100);
    setLeaveTimeout(timeout);
  };

  return (
    <header className="w-full border-b bg-white relative sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="https://imgs.search.brave.com/dhZ7JdY0O8IoLEm1lBnbQmHkLHbGwCtBg4ZmvoU0Heo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM3LzIvc2Nob29s/LWJvb2stb24tdGhl/LXdvcmxkLWxvZ28t/cG5nX3NlZWtsb2dv/LTM3MDgzMC5wbmc"
            alt="ALLEN"
            className="h-8 w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMenuEnter(index)}
              onMouseLeave={handleMenuLeave}
            >
              <span className="cursor-pointer text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200">
                {item.label}
              </span>

              {/* BADGE */}
              {item.badge && (
                <span className="absolute -top-2 -right-6 text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full animate-pulse">
                  {item.badge}
                </span>
              )}

              {/* DROPDOWN */}
              {item.submenu && activeMenu === index && (
                <div
                  className="absolute top-full left-0 mt-2 flex gap-3 items-start z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={() =>
                    leaveTimeout && clearTimeout(leaveTimeout)
                  }
                  onMouseLeave={handleSubmenuLeave}
                >
                  {/* LEFT MENU */}
                  <div className="w-72 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 flex flex-col transition-all duration-300 ease-in-out">
                    <div className="space-y-1">
                      {item.submenu.items.map((sub, subIndex) => (
                        <div key={subIndex}>
                          <div
                            onMouseEnter={() => handleSubmenuEnter(subIndex)}
                            className={`flex justify-between items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                              activeSub === subIndex
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <span className="text-sm">{sub.label}</span>
                            <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">
                              ›
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <img
                        className="rounded-xl w-full h-20 object-cover transition-transform duration-300 hover:scale-105"
                        src="https://asset.allen.in/9574cc2f-8479-4f5e-9c7a-0cde506811a0/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.53&__name__=web%20(22)"
                        alt="Course preview"
                      />
                      <img
                        className="rounded-xl w-full h-20 object-cover transition-transform duration-300 hover:scale-105"
                        src="https://asset.allen.in/e2ae933c-e444-483c-b801-4db498d0f615/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.53&__name__=web%20(23)"
                        alt="Course preview"
                      />
                    </div>
                  </div>

                  {/* RIGHT SUBMENU */}
                  {activeSub !== null && (
                    <div>
                      <div className="w-64 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 transition-all duration-300 ease-in-out animate-in slide-in-from-left-2 duration-200">
                        <div className="space-y-2">
                          {item.submenu.items[activeSub].children.map(
                            (child, childIndex) => (
                              <div
                                key={childIndex}
                                className="py-2 px-3 text-sm rounded-lg hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-all duration-200 text-gray-600"
                              >
                                {child}
                              </div>
                            )
                          )}
                        </div>
                        <div className="mt-2">
                        <img
                          src="https://asset.allen.in/f62c8ce6-d3e8-4666-a74a-9be742d3affd/sc/image_preview_extra_large/secondaryContent.webp?__ar__=3.71&__name__=Banner%20components%20(5)s"
                          className="w-full rounded-2xl"
                          alt=""
                          srcset=""
                        />
                      </div>
                      </div>
                    
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT ACTION */}
        <div className="flex items-center">
          <FancyButton text="Login" href="/login" />
        </div>
      </div>
    </header>
  );
};

export default Header;
