import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { SearchButton, Search } from './SearchBarStyled'
import { InputSearch  } from 'components/Utils/Styles/basicStyle'
export const SearchBar = ({onCleanFilter, filter, onFilterChange, styles}) => {
    return <Search style={styles} >
        <InputSearch value={filter} onChange={onFilterChange} placeholder={'Search'}></InputSearch>
        <SearchButton type="button" onClick={onCleanFilter} >{filter.trim() === '' ? <SearchIcon  sx={{ fontSize: 20 }} /> : <HighlightOffIcon sx={{ fontSize: 20 }} />  }</SearchButton>
    </Search>
}