import { ReactChild } from 'react';
import './Calendar.css';

type CalendarType = {
  children: ReactChild[];
};

const Calendar = ({ children }: CalendarType) => {
  return <div className='Calendar'>{children}</div>;
};

export default Calendar;
