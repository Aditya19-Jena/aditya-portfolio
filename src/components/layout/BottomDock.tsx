import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";
import {
  House,
  UserRound,
  FolderOpen,
  Layers3,
  Route,
  Activity,
  BadgeCheck,
  GraduationCap,
  Mail,
} from "lucide-react";

type NavItem = {
  id: string;
  href: string;
  label: string;
  icon: ElementType;
};

const navItems: NavItem[] = [
  {
    id: "home",
    href: "#home",
    label: "Home",
    icon: House,
  },
  {
    id: "about",
    href: "#about",
    label: "About",
    icon: UserRound,
  },
  {
    id: "projects",
    href: "#projects",
    label: "Projects",
    icon: FolderOpen,
  },
  {
    id: "capabilities",
    href: "#capabilities",
    label: "Capabilities",
    icon: Layers3,
  },
  {
    id: "journey",
    href: "#journey",
    label: "Journey",
    icon: Route,
  },
  {
    id: "currently",
    href: "#currently",
    label: "Currently",
    icon: Activity,
  },
  {
    id: "certifications",
    href: "#certifications",
    label: "Certificates",
    icon: BadgeCheck,
  },
  {
    id: "education",
    href: "#education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "contact",
    href: "#contact",
    label: "Contact",
    icon: Mail,
  },
];

const BottomDock = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  // Prevent the scroll listener from immediately
  // overriding the section selected by a click.
  const isNavigating = useRef(false);

  // -----------------------------------------
  // ACTIVE SECTION
  // -----------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating.current) {
        return;
      }

      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) {
          return;
        }

        const sectionTop =
          (section as HTMLElement).offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -----------------------------------------
  // FOOTER VISIBILITY
  // -----------------------------------------

  useEffect(() => {
    const footer =
      document.querySelector("#footer") ??
      document.querySelector("footer");

    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  // -----------------------------------------
  // NAVIGATION
  // -----------------------------------------

  const handleNavigation = (item: NavItem) => {
    const section = document.querySelector(item.href);

    if (!section) {
      return;
    }

    // Immediately show the clicked section
    setActiveSection(item.id);

    // Lock automatic section detection while
    // smooth scrolling is happening.
    isNavigating.current = true;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Unlock after the smooth scroll has finished.
    window.setTimeout(() => {
      isNavigating.current = false;
      setActiveSection(item.id);
    }, 800);
  };

  // -----------------------------------------
  // HOME
  // -----------------------------------------

  const handleHome = () => {
    const homeSection = document.querySelector("#home");

    if (!homeSection) {
      return;
    }

    setActiveSection("home");

    isNavigating.current = true;

    homeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.setTimeout(() => {
      isNavigating.current = false;
      setActiveSection("home");
    }, 800);
  };

  // -----------------------------------------
  // RENDER
  // -----------------------------------------

  return (
    <nav
      aria-label="Portfolio navigation"
      className={`
        fixed
        bottom-4
        left-1/2
        z-50
        -translate-x-1/2
        transition-all
        duration-300
        ease-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      <div
        className="
          flex
          items-center
          rounded-full
          border
          border-zinc-800
          bg-[#111111]/95
          px-1
          py-1
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
        "
      >
        {/* -------------------------------- */}
        {/* BRAND */}
        {/* -------------------------------- */}

        <button
          type="button"
          onClick={handleHome}
          aria-label="Go to home"
          className="
            flex
            h-7
            items-center
            px-2.5
            text-[10px]
            font-semibold
            tracking-[0.12em]
            text-zinc-400
            transition-colors
            duration-200
            hover:text-white
          "
        >
          ADITYA
        </button>

        {/* -------------------------------- */}
        {/* DIVIDER */}
        {/* -------------------------------- */}

        <div className="mx-1 h-3 w-px bg-zinc-800" />

        {/* -------------------------------- */}
        {/* NAVIGATION */}
        {/* -------------------------------- */}

        <div className="flex items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item)}
                aria-label={item.label}
                aria-current={
                  isActive ? "page" : undefined
                }
                title={item.label}
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900"
                      : "text-zinc-600 hover:bg-zinc-800/70 hover:text-zinc-300"
                  }
                `}
              >
                <Icon
                  size={12}
                  strokeWidth={isActive ? 2 : 1.5}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomDock;