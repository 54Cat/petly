import { useState, useEffect } from 'react';
import { PageSection } from 'components/Utils/Styles/basicStyle'
import { Title } from 'components/Utils/Styles/basicStyle'
import { CardsList } from 'components/CardsList/CardsList'
import OurFriendsCard from 'components/OurFriendsCard/OurFriendsCard'
import friends from 'data/sponsors.json'
import { onTitleStyles, onListStyles } from 'components/Utils/helpers/friendsResizeStyles';



export const FriendsPage = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
    
    return <PageSection>
        <Title style={onTitleStyles(windowSize)}>Our friend</Title>
        <CardsList styles={onListStyles(windowSize)}  cardsArray={friends} CardsItem={OurFriendsCard} />
    </PageSection>
}