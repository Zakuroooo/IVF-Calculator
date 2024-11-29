function ProcedureHistory() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Have you undergone these procedures before?
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="mb-2">ICSI Procedure:</p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="icsi"
                className="form-radio text-red-500"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="icsi"
                className="form-radio text-red-500"
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <div>
          <p className="mb-2">PGT Testing:</p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pgt"
                className="form-radio text-red-500"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pgt"
                className="form-radio text-red-500"
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcedureHistory;
