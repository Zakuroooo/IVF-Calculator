import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Calculator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ageRange: "",
    cycles: 1,
    icsiProcedure: null,
    pgtTesting: null,
    medicalConditions: {
      PCOS: false,
      Endometriosis: false,
      LowOvarianReserve: false,
      MaleFactorInfertility: false,
    },
  });

  const handleConditionChange = (condition) => {
    setFormData((prev) => ({
      ...prev,
      medicalConditions: {
        ...prev.medicalConditions,
        [condition]: !prev.medicalConditions[condition],
      },
    }));
  };

  const calculateSuccessRate = () => {
    let rate = 50;


    switch (formData.ageRange) {
      case "Under 30":
        rate += 20;
        break;
      case "30 - 34":
        rate += 10;
        break;
      case "35 - 37":
        rate += 5;
        break;
      case "38 - 40":
        rate -= 10;
        break;
      case "41 - 43":
        rate -= 20;
        break;
      case "Above 43":
        rate -= 30;
        break;
      default:
        break;
    }


    if (formData.icsiProcedure) rate += 5;
    if (formData.pgtTesting) rate += 10;


    if (formData.medicalConditions.PCOS) rate -= 5;
    if (formData.medicalConditions.Endometriosis) rate -= 10;
    if (formData.medicalConditions.LowOvarianReserve) rate -= 15;
    if (formData.medicalConditions.MaleFactorInfertility) rate -= 10;


    rate = Math.max(0, Math.min(100, rate));

    navigate("/results", {
      state: {
        formData: {
          ...formData,
          successRate: rate,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-800">IVF Success Rate Calculator</span>
        </div>
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 text-center">
              Which age range applies to you?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                "Under 30",
                "Between 30 - 34",
                "Between 35 - 37",
                "Between 38 - 40",
                "Between 41 - 43",
                "Above 43",
              ].map((range) => (
                <label
                  key={range}
                  className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer
                    ${
                      formData.ageRange === range
                        ? "border-[#C94F4F] bg-[#C94F4F]/5"
                        : "border-gray-200 hover:border-[#C94F4F]/50"
                    }
                  `}
                >
                  <input
                    type="radio"
                    value={range}
                    checked={formData.ageRange === range}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        ageRange: e.target.value,
                      }))
                    }
                    className="hidden"
                  />
                  <span className="text-sm sm:text-base text-center">
                    {range}
                  </span>
                </label>
              ))}
            </div>
          </div>


          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 text-center">
              Number of IVF Cycles?
            </h2>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={formData.cycles}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      cycles: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="absolute -top-8 left-0 right-0 flex justify-between">
                  {[1, 2, 3, 4].map((num) => (
                    <span
                      key={num}
                      className={`w-6 h-6 flex items-center justify-center rounded-full text-sm
                        ${
                          formData.cycles === num
                            ? "bg-[#C94F4F] text-white"
                            : "bg-gray-200"
                        }
                      `}
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 text-center">
              Have you undergone these procedures before?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">

              <div className="space-y-4">
                <p className="text-lg font-medium text-center sm:text-left">
                  ICSI Procedure:
                </p>
                <div className="flex justify-center sm:justify-start space-x-4">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={`icsi-${option}`}
                      className={`
                        flex items-center justify-center px-6 py-2 rounded-lg border-2 cursor-pointer
                        ${
                          formData.icsiProcedure === (option === "Yes")
                            ? "border-[#C94F4F] bg-[#C94F4F]/5"
                            : "border-gray-200 hover:border-[#C94F4F]/50"
                        }
                      `}
                    >
                      <input
                        type="radio"
                        checked={formData.icsiProcedure === (option === "Yes")}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            icsiProcedure: option === "Yes",
                          }))
                        }
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>


              <div className="space-y-4">
                <p className="text-lg font-medium text-center sm:text-left">
                  PGT Testing:
                </p>
                <div className="flex justify-center sm:justify-start space-x-4">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={`pgt-${option}`}
                      className={`
                        flex items-center justify-center px-6 py-2 rounded-lg border-2 cursor-pointer
                        ${
                          formData.pgtTesting === (option === "Yes")
                            ? "border-[#C94F4F] bg-[#C94F4F]/5"
                            : "border-gray-200 hover:border-[#C94F4F]/50"
                        }
                      `}
                    >
                      <input
                        type="radio"
                        checked={formData.pgtTesting === (option === "Yes")}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            pgtTesting: option === "Yes",
                          }))
                        }
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 text-center">
              Do you have any of these medical conditions?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {Object.keys(formData.medicalConditions).map((condition) => (
                <label
                  key={condition}
                  className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer
                    ${
                      formData.medicalConditions[condition]
                        ? "border-[#C94F4F] bg-[#C94F4F]/5"
                        : "border-gray-200 hover:border-[#C94F4F]/50"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    checked={formData.medicalConditions[condition]}
                    onChange={() => handleConditionChange(condition)}
                    className="hidden"
                  />
                  <span className="text-sm sm:text-base">
                    {condition.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </label>
              ))}
            </div>
          </div>


          <div className="text-center">
            <button
              onClick={calculateSuccessRate}
              className="bg-[#C94F4F] text-white py-3 px-12 rounded-lg hover:bg-[#B54646] transition-colors"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
