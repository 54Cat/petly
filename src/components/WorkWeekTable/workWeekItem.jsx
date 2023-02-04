import { ScheduleBoxItem, ScheduleInfo } from "./WorkWeekTableStyled";
//import { nanoid } from "nanoid";


const WorkWeekItem = ({scheduleItem}) => {
    const { day, from, to } = scheduleItem;
    
    // function getMessage(day, from, to) {
    //     function getWeekDay(date) {
    //     let days = ['SU', 'MN', 'TU', 'WE', 'TH', 'FR', 'SA'];

    //     return days[date.getDay()];
    // }
    // let now = new Date();

    // let weekDay = getWeekDay(now)
    // let hour = now.getHours()
    // let message = ''
    // if (weekDay === day  && from  <= hour && hour >=  to ) {
    //   return message = 'Open now';
    // }
    //     return message
    // }
    // const message = getMessage(day, from, to)


    // function getOpenClose(now) {
        
    //     let weekDay = getWeekDay(now)
    //     let hour = now.getHours()
    //     console.log(hour)
    //     if (weekDay === day && isOpen === true && from <= hour >= to) {
    //     return console.log("open now")
    //     }
    //     return console.log("close now")
    // }

    return (
      <ScheduleBoxItem>
            <ScheduleInfo >{day}</ScheduleInfo>
            <ScheduleInfo >{`${from} - ${to}`}</ScheduleInfo>
        </ScheduleBoxItem>  
    )
}
export default WorkWeekItem;