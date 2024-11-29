function MedicalConditions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Do you have any of these medical conditions?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-red-500" />
          <span>PCOS</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-red-500"
            defaultChecked
          />
          <span>Endometriosis</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-red-500" />
          <span>Low Ovarian Reserve</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-red-500" />
          <span>Male Factor Infertility</span>
        </label>
      </div>
    </div>
  );
}

export default MedicalConditions;
