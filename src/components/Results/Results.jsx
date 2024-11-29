import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

function Results() {
  const location = useLocation();
  const [displayRate, setDisplayRate] = useState(0);

  useEffect(() => {
    const finalRate = location.state?.formData?.successRate || 64;
    let startTime = null;
    const duration = 1000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentValue = Math.round(finalRate * progress);
      setDisplayRate(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [location.state]);

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <Navbar />

      <div className="container mx-auto px-4">
        <div className="lg:hidden flex items-center gap-2 text-white py-6">
          <Link to="/calculator" className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            IVF Success Rate Calculator
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-gray-400 py-4">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link to="/calculator" className="hover:text-white">
            IVF Success Rate Calculator
          </Link>
          <span>/</span>
          <span className="text-white">Result</span>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C94F4F]"></div>
          <h1 className="text-xl lg:text-3xl text-white font-light">
            Your estimated IVF Success Rate is
          </h1>
        </div>

        <div className="flex flex-col items-center lg:hidden">
          <div className="relative w-[240px] h-[240px] mb-8 mx-auto">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-[#1B4D3E] stroke-[35]"
                fill="none"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-[#34D399] stroke-[35]"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: displayRate / 100 }}
                transition={{ duration: 1 }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[65%] h-[65%] rounded-full bg-[#1E1E1E]"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-5xl font-bold">
                {displayRate}%
              </span>
            </div>
          </div>

          <p className="text-center text-white text-lg mb-8">
            With {location.state?.formData?.cycles || 1} IVF Cycle
          </p>

          <div className="relative w-full h-[400px] mb-8">
            <img
              src="https://s3-alpha-sig.figma.com/img/3083/cfdf/a3342bdeb14d22fce3f84a7131648fe0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3rcPSzyYXFQ3av1UzjVwX~ywz9ut1Jmpzmx6Z~RWwUd~~r9UxNnyNl4R9JldCD4zDCW7Q2IeQvOvnDs6u4pyH3CTfoUnO5v492UL1iuyJt3I3zHG387QUApgjGytHwEVS51em2fW5HQXigaiOLgI6ldEf-XgFWD-AZPB6squ7fJ1sPU5SEgs04SJJgSlkJzl1Ka-Ed1OsDBqFXjBxAf7zZ~60XEh1fn~sDWw58OaB~z-10gRcakHkeVapNSDVELmye3t0JjF7zlsu5d9JV7LvBxi6ry6D-l1bYi0r8uWHVFccwd~tuvdXccvuZZNeoqnR6oiSRnQkxLHAzIzIkmVQ__"
              alt="Couple"
              className="w-full h-full object-cover grayscale"
              style={{
                filter: "grayscale(100%) brightness(0.8)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1B4D3E]/70"></div>
          </div>

          <button className="w-full bg-[#C94F4F] text-white py-4 rounded-lg mb-8 flex items-center justify-center gap-2">
            Start private consultation →
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] mx-auto">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="stroke-[#1B4D3E] stroke-[40]"
                  fill="none"
                />

                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="stroke-[#34D399] stroke-[40]"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: displayRate / 100 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65%] h-[65%] rounded-full bg-[#1E1E1E]"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl sm:text-8xl font-bold">
                  {displayRate}%
                </span>
              </div>
            </div>
            <p className="text-center text-white text-xl mt-6">
              With {location.state?.formData?.cycles || 1} IVF Cycle
            </p>
          </div>

          <div className="relative h-[500px] sm:h-[600px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/3083/cfdf/a3342bdeb14d22fce3f84a7131648fe0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3rcPSzyYXFQ3av1UzjVwX~ywz9ut1Jmpzmx6Z~RWwUd~~r9UxNnyNl4R9JldCD4zDCW7Q2IeQvOvnDs6u4pyH3CTfoUnO5v492UL1iuyJt3I3zHG387QUApgjGytHwEVS51em2fW5HQXigaiOLgI6ldEf-XgFWD-AZPB6squ7fJ1sPU5SEgs04SJJgSlkJzl1Ka-Ed1OsDBqFXjBxAf7zZ~60XEh1fn~sDWw58OaB~z-10gRcakHkeVapNSDVELmye3t0JjF7zlsu5d9JV7LvBxi6ry6D-l1bYi0r8uWHVFccwd~tuvdXccvuZZNeoqnR6oiSRnQkxLHAzIzIkmVQ__"
              alt="Couple"
              className="w-full h-full object-cover rounded-lg grayscale"
              style={{
                filter: "grayscale(100%) brightness(0.8)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#1B4D3E]/70 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
