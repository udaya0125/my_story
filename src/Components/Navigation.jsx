import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  Heart,
  BookOpen,
  Users,
  Sparkles,
  Leaf,
} from "lucide-react";

const Navigation = ({ onMenuToggle, menuOpen: externalMenuOpen }) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const scrollYRef = useRef(0);
  const currentYear = new Date().getFullYear();

  // Use external prop if provided, otherwise use internal state
  const menuOpen =
    externalMenuOpen !== undefined ? externalMenuOpen : internalMenuOpen;

  const toggleMenu = () => {
    const newState = !menuOpen;
    if (onMenuToggle) {
      onMenuToggle(newState);
    } else {
      setInternalMenuOpen(newState);
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };
  }, [menuOpen]);

  // Scroll handling effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
        setIsScrollingUp(false);
      } else {
        setShowNav(true);
        setIsScrollingUp(currentScrollY > 50);
      }

      setLastScrollY(currentScrollY);
    };

    const throttledScrollHandler = () => {
      if (!menuOpen) {
        handleScroll();
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          throttledScrollHandler();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollY, menuOpen]);

  const menuItems = [
    {
      title: "The Story",
      path: "/story",
      icon: BookOpen,
      items: [
        { name: "The Silent Love Story", path: "/story/3" },
        { name: "The Love I Learned to Believe In", path: "/story/2" },
        { name: "Sweet Memory of her", path: "/story/1" },
        // { name: 'The World', path: '/story/world' }
      ],
    },
    {
      title: "Realms",
      path: "/realms",
      icon: Sparkles,
      items: [
        { name: "Story 4", path: "/story/4" },
        { name: "Story 5", path: "/story/5" },
        { name: "Story 6", path: "/story/6" },
        // { name: 'Ancient Temple', path: '/realms/ancient-temple' }
      ],
    },
    {
      title: "Characters",
      path: "/characters",
      icon: Users,
      items: [
        { name: "Elder Spirits", path: "/characters/elder-spirits" },
        { name: "Guardians", path: "/characters/guardians" },
        { name: "Mythical Beings", path: "/characters/mythical-beings" },
        // { name: 'The Prophecy', path: '/characters/prophecy' }
      ],
    },
    {
      title: "Legends",
      path: "/legends",
      icon: Leaf,
      items: [
        { name: "Tales of Old", path: "/legends/tales-of-old" },
        { name: "Sacred Rituals", path: "/legends/sacred-rituals" },
        { name: "Myths & Mysteries", path: "/legends/myths-mysteries" },
        { name: "The Lost Chapter", path: "/legends/lost-chapter" },
      ],
    },
    {
      title: "Chronicles",
      path: "/chronicles",
      icon: Heart,
      items: [
        { name: "Book I: Awakening", path: "/chronicles/awakening" },
        { name: "Book II: Discovery", path: "/chronicles/discovery" },
        { name: "Book III: Destiny", path: "/chronicles/destiny" },
        { name: "Book IV: Legacy", path: "/chronicles/legacy" },
      ],
    },
  ];

  // Navigation colors with #FE7743
  const navTextColor = isScrollingUp ? "text-[#FE7743]" : "text-white";
  const navBg = isScrollingUp ? "bg-[#0A0F1C]" : "bg-transparent";
  const bookButtonBg = "bg-[#FE7743]";
  const bookButtonText = "text-white";
  const bookButtonHover = "hover:bg-[#FE7743]/90";

  const getDelayClass = (idx) => {
    const delays = [
      "delay-[0ms]",
      "delay-[100ms]",
      "delay-[200ms]",
      "delay-[300ms]",
      "delay-[400ms]",
      "delay-[500ms]",
    ];
    return delays[idx] || "delay-[0ms]";
  };

  return (
    <div className="relative w-full">
      {/* Navigation Bar with scroll behavior */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-12 py-6
                transition-all duration-300
                ${showNav ? "translate-y-0" : "-translate-y-full"}
                ${navBg} ${navTextColor}`}>
        <div className="flex items-center justify-between gap-2">
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className={`flex items-center gap-2 ${navTextColor} hover:text-[#FE7743] transition-all group`}>
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase">
              Menu
            </span>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="text-center block">
              <h1
                className={`text-xl sm:text-3xl md:text-4xl font-serif tracking-[0.3em] ${navTextColor} hover:text-[#FE7743] transition-colors`}>
                WHISPERS
              </h1>
              <p
                className={`text-[8px] sm:text-[10px] tracking-[0.4em] font-light mt-1 ${navTextColor}/80`}>
                OF THE FORGOTTEN
              </p>
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              to="/begin-journey"
              className={`
                                flex items-center gap-1 rounded-full sm:gap-2 px-4 py-2
                                transition-all duration-300 ${bookButtonHover}
                                ${bookButtonBg} ${bookButtonText}
                            `}>
              <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase">
                Story
              </span>
              {/* <ChevronRight className="w-4 h-4" /> */}
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-Screen Menu - with #FE7743 accent color */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-700 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        {/* Background with deep story-like atmosphere */}
        <div
          className="absolute inset-0 bg-[#0A0F1C] bg-gradient-to-br from-[#0A0F1C] via-[#1A1F2C] to-[#0F141F]"
          onClick={toggleMenu}
        />

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FE7743] blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#FE7743]/60 blur-3xl" />
        </div>

        {/* Menu Content */}
        <div className="relative h-full overflow-y-auto">
          <div className=" flex flex-col">
            {/* Header */}
            <div className="px-6 sm:px-8 lg:px-12 py-6 lg:py-8 border-b border-[#FE7743]/20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-wider">
                    Tales & Legends
                  </h2>
                  <p className="text-[#FE7743]/80 text-xs sm:text-sm mt-2 font-light tracking-wide">
                    Embark on an Epic Journey
                  </p>
                </div>
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-[#FE7743] transition-colors hover:rotate-90 transform duration-300">
                  <X className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
              </div>
            </div>

            {/* Main Menu Grid */}
            <div className="flex-1 px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                {menuItems.map((section, idx) => {
                  const IconComponent = section.icon;
                  return (
                    <div
                      key={section.title}
                      className={`transform transition-all duration-500 ${getDelayClass(
                        idx,
                      )} ${
                        menuOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}>
                      <div className="space-y-6 group">
                        {/* Section Title with Icon */}
                        <div className="border-b border-[#FE7743]/30 pb-4 flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-[#FE7743] group-hover:rotate-12 transition-transform duration-300" />
                          <Link
                            to={section.path}
                            onClick={toggleMenu}
                            className="block flex-1">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white tracking-wide hover:text-[#FE7743] transition-colors cursor-pointer">
                              {section.title}
                            </h3>
                          </Link>
                        </div>

                        {/* Section Items */}
                        <ul className="space-y-3">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.path}
                                className="group/item flex items-center text-gray-300 hover:text-[#FE7743] text-sm sm:text-base font-light tracking-wide transition-all duration-300"
                                onClick={toggleMenu}>
                                <ChevronRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#FE7743]" />
                                <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 lg:px-12 py-6 border-t border-[#FE7743]/20">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <p className="text-gray-400 text-xs sm:text-sm font-light">
                  © {currentYear}{" "}
                  <a
                    href="https://www.udaya-adhikari.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FE7743] hover:underline">
                    Udaya Adhikari
                  </a>{" "}
                  • All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
