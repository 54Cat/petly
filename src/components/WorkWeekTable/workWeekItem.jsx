import { ScheduleBoxItem, ScheduleInfo,CurrentBoxItem } from "./WorkWeekTableStyled";
import getWeekDay from "components/Utils/helpers/getWeekDay";
import { useState, useEffect } from "react";

const WorkWeekItem = ({ scheduleItem }) => {
    const [currentDay, setCurrentDay] = useState(false);
    const { day, from, to } = scheduleItem;
    let now = new Date();
    let dayName = getWeekDay(now)

    useEffect(() => {
        if (dayName === day) {
            setCurrentDay(state => state = true)
        }   
    }, [day, dayName])

    return (
        currentDay ?
        <CurrentBoxItem>
            <ScheduleInfo >{day}</ScheduleInfo>
            <ScheduleInfo >{`${from} - ${to}`}</ScheduleInfo>
        </CurrentBoxItem>
        : <ScheduleBoxItem>
            <ScheduleInfo >{day}</ScheduleInfo>
            <ScheduleInfo >{`${from} - ${to}`}</ScheduleInfo>
        </ScheduleBoxItem>    
    )
}
export default WorkWeekItem;