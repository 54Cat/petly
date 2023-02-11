import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { SearchButton, SearchForm } from './SearchBarStyled'
import { InputSearch  } from 'components/Utils/Styles/basicStyle'
export const SearchBar = ({handleSubmit, filter, onFilterChange, styles}) => {
    return <SearchForm style={styles} onSubmit={handleSubmit}>
            <InputSearch value={filter} onChange={onFilterChange} placeholder={'Search'}></InputSearch>
        <SearchButton type="submit" >{filter.trim() === '' ? <SearchIcon  sx={{ fontSize: 20 }} /> : <HighlightOffIcon sx={{ fontSize: 20 }} />  }</SearchButton>
        </SearchForm>
}