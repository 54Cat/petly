import WorkWeekItem from "./workWeekItem";
import { nanoid } from "nanoid";
import { ScheduleBox } from "./WorkWeekTableStyled";
import days from "components/OurFriendsCard/days";
import sponsors from "../../data/sponsors.json"


const WorkWeekTable = () => {
    let obj
    
    const schedule = sponsors.filter((item) => item.workDays !== null && item.workDays !== undefined).map(item => item.workDays).map(item => obj = item);
    const test = obj.map((item, index) => item.day = days[index]);
    
    
    return (
        <ScheduleBox>
            {obj && obj.map(scheduleItem => {
                return <WorkWeekItem key={nanoid()} scheduleItem={scheduleItem} />
            })}
    </ScheduleBox>)
}

export default WorkWeekTable;