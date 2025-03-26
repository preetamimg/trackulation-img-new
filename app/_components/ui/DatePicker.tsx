"use client"
import React, { useEffect } from 'react'
import { DateRangePicker } from 'rsuite'
import { endOfWeek, startOfWeek } from 'date-fns'
import Image from 'next/image'
import { useMediaQuery } from '@/app/_hooks/useMediaQuery'
import { DateRange } from 'rsuite/esm/DateRangePicker'

const randerCalendarIcon = ()=> {
  return (
    <Image src={'/img/calendarIcon.png'} alt='calendar icon' className='flex -mt-1' height={18} width={18}/>
  )
}

interface DatePickerProps {
  dateRange : DateRange | null
  setDateRange : (value : DateRange | null) => void
}


const DatePicker : React.FC<DatePickerProps> = ({dateRange, setDateRange}) => {

  const isLgScreen = useMediaQuery('768px')


  // Handle date range change
  const handleChange = (value : DateRange | null) => {
    setDateRange(value);
  };

  useEffect(()=> {
    const now = new Date();
    const start = startOfWeek(now, { weekStartsOn: 1 }); // Week starts on Monday
    const end = endOfWeek(now, { weekStartsOn: 1 });
    setDateRange([start, end])
  }, [])//eslint-disable-line

  return (
    <>
          <div className="dateRangePicker">
            <DateRangePicker
              showOneCalendar={isLgScreen}
              placement='auto'
              // ranges={predefinedRanges}
              format={'MMM dd, yyyy'}
              value={dateRange}
              onChange={(e) => handleChange(e)}
              cleanable={false}
              character={' - '}
              caretAs={randerCalendarIcon}
              showHeader={!isLgScreen}
              className='[&_.rs-picker-input-group]:flex-row-reverse h-10  [&_.rs-input-group-addon]:!pl-0 [&_.rs-picker-input-group]:h-full [&_.rs-picker-input-group]:border-theme8 [&_.rs-picker-input-group_input]:pl-0 [&_.rs-picker-input-group_input]:font-semibold [&_.rs-picker-input-group_input]:text-theme5 [&_.rs-picker-input-group]:!border-1 [&_.rs-picker-input-group]:!px-3 [&_.rs-picker-input-group_input]:!border-0 [&_.rs-picker-input-group]:!outline-none [&_.rs-picker-input-group_input]:![box-shadow:none] [&_.rs-picker-input-group_input]:![border:0px_solid_transparent] [&_.rs-picker-input-group_input]:focus:ring-[black] [&_.rs-picker-input-group_input]:focus:!shadow-none !max-w-[15.9375rem]'
            />
          </div>
    </>
  )
}

export default DatePicker