import WorkWeekItem from "./workWeekItem";
import { nanoid } from "nanoid";
import { ScheduleBox } from "./WorkWeekTableStyled";

const WorkWeekTable = ({items}) => {
   
    return (
        <ScheduleBox>
            {items && items.map(scheduleItem => {    
                return <WorkWeekItem key={nanoid()} scheduleItem={scheduleItem} />
            })}    
        </ScheduleBox>   
    )   
}

export default WorkWeekTable;