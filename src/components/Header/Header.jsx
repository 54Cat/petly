import { useMediaQuery } from 'react-responsive';
import HeaderMobile from './HeaderMobile';
import HeaderTablet from './HeaderTablet';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  
  	return (
		<>
			{isDesktop ? (
					<HeaderDesktop />
				) : isTablet ? (
					<HeaderTablet />
				) : (
					<HeaderMobile />
				)
			}
		</>
	);
};

export default Header;