import { ScheduleBoxItem, ScheduleInfo } from "./WorkWeekTableStyled";
//import { nanoid } from "nanoid";


const WorkWeekItem = ({scheduleItem}) => {
    const { day, from, to } = scheduleItem;  
    
    return (<>
      <ScheduleBoxItem>
            <ScheduleInfo >{day}</ScheduleInfo>
            <ScheduleInfo >{`${from} - ${to}`}</ScheduleInfo>
        </ScheduleBoxItem>
        {/* {isOpen? <p>Open now</p> : <p>Close Now</p>} */}
    </>
      
    )
}
export default WorkWeekItem;