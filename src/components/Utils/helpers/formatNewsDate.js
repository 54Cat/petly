import { format } from 'date-fns'

const formatNewsDate = date => {
    return format(new Date(date), 'dd/MM/yyyy');
}
 export default formatNewsDate