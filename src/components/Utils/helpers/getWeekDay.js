function getWeekDay(date) {
            let days = ['SU', 'MN', 'TU', 'WE', 'TH', 'FR', 'SA'];

            return days[date.getDay()];
}

export default getWeekDay