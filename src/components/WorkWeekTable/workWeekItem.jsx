import { ScheduleBoxItem, ScheduleInfo } from "./WorkWeekTableStyled";

const WorkWeekItem = ({ scheduleItem}) => {

    const { day, from, to } = scheduleItem;
    
        return (
            <ScheduleBoxItem>
            <ScheduleInfo>{day}</ScheduleInfo>
            <ScheduleInfo>{`${from} - ${to}`}</ScheduleInfo>
            </ScheduleBoxItem>)
    
}
export default WorkWeekItem;