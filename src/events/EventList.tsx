import { Calendar } from "@react-admin/ra-calendar";
import { List } from "react-admin";
import rrulePlugin from "@fullcalendar/rrule";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DatesSetArg } from "@fullcalendar/react";
import { add, sub, set } from "date-fns";

const converter = (event: any) => ({
  start: event.dtstart,
  end: event.dtend,
  ...event,
});

const getFilterValuesFromInterval = (
  dateInfo?: DatesSetArg,
  filterValues: any = {} // eslint-disable-line @typescript-eslint/no-unused-vars
): any => {
  const now = set(new Date(), {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const nowMinus1Month = sub(now, { months: 1 });
  const nowPlus2Months = add(now, { months: 2 });
  let returnValue: any =
    !dateInfo ||
    (dateInfo.start > nowMinus1Month && dateInfo.end < nowPlus2Months)
      ? {
          ...filterValues,
          dtstart_gte: nowMinus1Month.toISOString(),
          dtstart_lte: nowPlus2Months.toISOString(),
        }
      : {
          ...filterValues,
          dtstart_gte: dateInfo.startStr,
          dtstart_lte: dateInfo.endStr,
        };
  console.log(returnValue);
  return returnValue;
};

export const EventList = () => {
  return (
    <List>
      <Calendar
        plugins={[
          rrulePlugin,
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]}
        convertToEvent={converter}
        getFilterValueFromInterval={getFilterValuesFromInterval}
      />
    </List>
  );
};
