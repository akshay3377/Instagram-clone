const DateOfBirthSelector = () => {
  const [value, setValue] = useState(new Date());
  // console.log("date" , value);
  const onDateChange = (date) => {
    setValue(date);
  };

  return (
    <>
      <SelectDatepicker
        hideLabels
        selectedDate={value}
        onDateChange={onDateChange}
      />
    </>
  );
};

export default DateOfBirthSelector;
