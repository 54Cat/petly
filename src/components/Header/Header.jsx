import { useMediaQuery } from 'react-responsive';
import MenuMobile from './MenuMobile/MenuMobile';
import MenuTablet from './MenuTablet/MenuTablet';
import MenuDesktop from './MenuDesktop/MenuDesktop';

const Header = () => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  
  	return (
		<>
			{isDesktop ? (
					<MenuDesktop />
				) : isTablet ? (
					<MenuTablet />
				) : (
					<MenuMobile />
				)
			}
		</>
	);
};

export default Header;