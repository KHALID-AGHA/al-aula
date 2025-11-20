"use client";
import { navItems } from "@/src/lib/data";
import { NavItemProps, SubItem, NavItemType } from "@/src/types/sections";
import { AnimatePresence, motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItemEntranceVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const submenuVariants: Variants = {
  hidden: { opacity: 0, y: 10, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const mobileMenuVariants: Variants = {
  hidden: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.07,
    },
  },
};

const navContainerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

// --- TYPESCRIPT FOR MOBILE NAV ---
// This interface defines the props for the MobileNavItem component
interface MobileNavItemProps {
  item: NavItemType; // Assuming NavItemType is defined in sections.ts
  onClose: () => void;
}

// --- NAVBAR COMPONENT ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={navContainerVariants}
        className="flex h-fit rounded-full py-3 px-9  
      bg-white/30 backdrop-blur-sm shadow-xl 
       flex-row items-center justify-between z-50
       m-auto"
      >
        <motion.div
          variants={navItemEntranceVariants}
          viewport={{ once: false, amount: 0.5 }}
          className="Logo w-fit"
        >
          <Image src="/assets/Group 44.svg" alt="logo" width={60} height={10} />
        </motion.div>

        <div className="hidden lg:flex ml-4 items-center justify-center text-white font-medium space-x-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              submenuVariants={submenuVariants}
            />
          ))}
        </div>

        <motion.button
          variants={navItemEntranceVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(155, 90, 51, 0.8)",
          }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          className="hidden lg:block text-white rounded-[43px] bg-[#9B5A33] py-3 px-9"
        >
          Register now
        </motion.button>

        {/* Mobile Burger Icon (Visible on small screens) */}
        <motion.button
          className="lg:hidden text-white ml-4"
          onClick={() => setIsMobileMenuOpen(true)}
          variants={navItemEntranceVariants}
          viewport={{ once: false, amount: 0.5 }}

        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 h-screen w-full bg-white/30 backdrop-blur-xl z-[88989898] p-8 flex flex-col items-start gap-y-8"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end text-white"
              whileHover={{ rotate: 90 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-y-4 w-full text-white text-3xl font-light">
              {navItems.map((item, index) => (
                <MobileNavItem
                  key={index}
                  item={item}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>

            {/* Mobile Register Button */}
            <motion.button
              variants={navItemEntranceVariants}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white rounded-[43px] bg-[#9B5A33] py-4 px-12 text-2xl mt-8 w-full text-center"
            >
              Register now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

// --- MOBILE NAV ITEM COMPONENT (FIXED TS) ---

// ✅ FIX 2: Added type definitions for props
const MobileNavItem = ({ item, onClose }: MobileNavItemProps) => {
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <motion.div variants={navItemEntranceVariants} className="flex flex-col ">
      <Link
        href={item.href}
        onClick={(e) => {
          if (hasSubItems) {
            e.preventDefault();
            setIsMobileSubOpen(!isMobileSubOpen);
          } else {
            onClose();
          }
        }}
        className="py-2 flex justify-between items-center w-full"
      >
        <span className="hover:text-[#725A4A] transition-colors">
          {item.label}
        </span>

        {hasSubItems && (
          <motion.svg
            animate={{ rotate: isMobileSubOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="currentColor"
          >
            <path d="M12 17L6 7H18L12 17Z" />
          </motion.svg>
        )}
      </Link>

      <AnimatePresence>
        {hasSubItems && isMobileSubOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col pl-6 mt-2 overflow-hidden text-xl font-normal"
          >
            {/* ✅ FIX 2: Added type definition for subItem in map */}
            {item.subItems!.map((subItem: SubItem) => (
              <Link
                key={subItem.label}
                href={subItem.href}
                onClick={onClose}
                className="py-1 hover:text-[#725A4A] transition-colors"
              >
                {subItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- DESKTOP NAV ITEM COMPONENT (TS fix applied) ---

const NavItem = ({ item, submenuVariants }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const toggleDropdown = () => {
    if (hasSubItems) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <motion.div
      variants={navItemEntranceVariants}
      className="relative flex items-center h-full"
      whileHover={{ scale: 1.05, color: "#9B5A33" }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={item.href}
        onClick={toggleDropdown}
        className={`px-4 py-2 cursor-pointer transition-colors duration-200 
                    hover:text-[#725A4A] flex items-center gap-1 ${
                      hasSubItems ? "pr-2" : ""
                    }`}
      >
        <span>{item.label}</span>

        {hasSubItems && (
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 ml-1 text-white"
            fill="currentColor"
          >
            <path d="M12 17L6 7H18L12 17Z" />
          </motion.svg>
        )}
      </Link>

      <AnimatePresence>
        {hasSubItems && isOpen && (
          <motion.div
            variants={submenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-56 
            bg-white/30 backdrop-blur-sm shadow-xl rounded-xl p-2 flex flex-col z-20"
          >
            {item.subItems!.map((subItem: SubItem, subIndex) => (
              <motion.div
                key={subItem.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: subIndex * 0.05 }}
              >
                <Link
                  href={subItem.href}
                  className="px-4 py-2 text-sm my-1 bg-black/10 backdrop-blur-sm shadow-xl 
                  rounded-md text-white transition-colors block w-full text-center hover:bg-[#9B5A33]"
                  onClick={() => setIsOpen(false)}
                >
                  {subItem.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
