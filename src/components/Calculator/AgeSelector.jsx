function AgeSelector() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Which age range applies to you?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <label className="flex items-center space-x-2">
          <input type="radio" name="age" className="form-radio text-red-500" />
          <span>Under 30</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="age"
            className="form-radio text-red-500"
            defaultChecked
          />
          <span>Between 30 - 34</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="age" className="form-radio text-red-500" />
          <span>Between 35 - 37</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="age" className="form-radio text-red-500" />
          <span>Between 38 - 40</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="age" className="form-radio text-red-500" />
          <span>Between 41 - 43</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="age" className="form-radio text-red-500" />
          <span>Above 43</span>
        </label>
      </div>
    </div>
  );
}

export default AgeSelector;
