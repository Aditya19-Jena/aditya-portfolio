import { useEffect, useRef, useState } from "react";
import {
  House,
  UserRound,
  Layers3,
  Route,
  Activity,
  FolderOpen,
  GraduationCap,
  Mail,
} from "lucide-react";

const BottomDock = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  const isNavigating = useRef(false);
  const navigationTimeout = useRef(null);

  const navItems = [
    {
      id: "home",
      href: "#home",
      icon: House,
      label: "Home",
    },
    {
      id: "about",
      href: "#about",
      icon: UserRound,
      label: "About",
    },
    {
      id: "capabilities",
      href: "#capabilities",
      icon: Layers3,
      label: "Capabilities",
    },
    {
      id: "journey",
      href: "#journey",
      icon: Route,
      label: "Journey",
    },
    {
      id: "currently",
      href: "#currently",
      icon: Activity,
      label: "Currently",
    },
    {
      id: "projects",
      href: "#projects",
      icon: FolderOpen,
      label: "Projects",
    },
    {
      id: "education",
      href: "#education",
      icon: GraduationCap,
      label: "Education",
    },
    {
      id: "contact",
      href: "#contact",
      icon: Mail,
      label: "Contact",
    },
  ];

  /* --------------------------------
     ACTIVE SECTION + FOOTER
  -------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      /* --------------------------------
         FOOTER VISIBILITY
      -------------------------------- */

      const footer =
        document.querySelector("footer") ||
        document.querySelector("#footer");

      if (footer) {
        const footerRect =
          footer.getBoundingClientRect();

        setIsVisible(
          footerRect.top >= window.innerHeight
        );
      }

      /* --------------------------------
         ACTIVE SECTION
      -------------------------------- */

      // Don't change active section while
      // smooth navigation is happening.
      if (isNavigating.current) return;

      const focusPoint = window.innerHeight * 0.35;

      let currentSection = "home";

      for (const item of navItems) {
        const section = document.querySelector(
          item.href
        );

        if (!section) continue;

        const rect =
          section.getBoundingClientRect();

        if (rect.top <= focusPoint) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }
    };
  }, []);

  /* --------------------------------
     NAVIGATION
  -------------------------------- */

  const handleNavigation = (href, id) => {
    const section = document.querySelector(href);

    if (!section) return;

    // Immediately show the selected section
    setActiveSection(id);

    // Lock scroll-based active detection
    isNavigating.current = true;

    // Clear previous unlock timer
    if (navigationTimeout.current) {
      clearTimeout(navigationTimeout.current);
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
      Give smooth scrolling enough time to finish.
      This prevents the indicator from jumping
      through intermediate sections.
    */
    navigationTimeout.current = setTimeout(() => {
      isNavigating.current = false;

      // Recalculate the actual section once scrolling ends
      const focusPoint = window.innerHeight * 0.35;

      let currentSection = id;

      for (const item of navItems) {
        const target = document.querySelector(
          item.href
        );

        if (!target) continue;

        const rect =
          target.getBoundingClientRect();

        if (rect.top <= focusPoint) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    }, 900);
  };

  const activeIndex = Math.max(
    0,
    navItems.findIndex(
      (item) => item.id === activeSection
    )
  );

  return (
    <nav
      aria-label="Portfolio navigation"
      className={`
        fixed
        bottom-5
        left-1/2
        z-50
        -translate-x-1/2
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }
      `}
    >
      {/* DOCK */}

      <div
        className="
          flex
          items-center
          rounded-full
          border
          border-zinc-800/90
          bg-[#111112]/95
          p-1.5
          shadow-[0_12px_40px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        {/* BRAND */}

        <button
          onClick={() =>
            handleNavigation("#home", "home")
          }
          aria-label="Go to home"
          className="
            flex
            h-8
            items-center
            px-3
            text-[12px]
            font-semibold
            tracking-[0.08em]
            text-zinc-300
            transition-colors
            duration-300
            hover:text-white
          "
        >
          ADITYA
        </button>

        {/* DIVIDER */}

        <div className="mx-1 h-4 w-px bg-zinc-800" />

        {/* NAVIGATION */}

        <div className="relative">
          {/* ACTIVE INDICATOR */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-8
              w-8
              rounded-full
              bg-zinc-100
              shadow-[0_2px_12px_rgba(255,255,255,0.14)]
              transition-transform
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={{
              transform: `translateX(${activeIndex * 2}rem)`,
            }}
          />

          {/* ICONS */}

          <div className="flex items-center">
            {navItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    handleNavigation(
                      item.href,
                      item.id
                    )
                  }
                  aria-label={item.label}
                  title={item.label}
                  className={`
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-zinc-900"
                        : "text-zinc-600 hover:text-zinc-300"
                    }
                  `}
                >
                  <Icon
                    size={13}
                    strokeWidth={
                      isActive ? 2.1 : 1.5
                    }
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomDock;