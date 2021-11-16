import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      < input
      type="text"
      value={title}
      min={getTodayString}
      onChange={({target}) => setTitle(target.value)} 
      />
      <input
      type="date"
      value={date}
      onChange={({target}) => setTime(target.value) }      
      />
      <contactPicker 
      contacts={contacts}
      value={contact}
      onChange={({target}) => setContact(target.value)}
      />
      <input type='submit' />
    </form>
  );
};
