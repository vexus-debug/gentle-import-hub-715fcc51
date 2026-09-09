import { CalendarHeart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FloatingBookButton = () => {
  const { pathname } = useLocation();
  if (pathname === "/book") return null;

  return (
    <Link
      to="/book"
      aria-label="Book now"
      className="group fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl animate-fade-in"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-40 group-hover:opacity-0" />
      <CalendarHeart size={20} className="relative transition-transform duration-300 group-hover:scale-110" />
      <span className="relative text-sm font-medium tracking-wide">Book now</span>
    </Link>
  );
};

export default FloatingBookButton;
