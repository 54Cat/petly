import { useState, useEffect } from 'react';
import Notiflix from 'notiflix'
import { PageSection } from 'components/Utils/Styles/basicStyle'
import { Title } from 'components/Utils/Styles/basicStyle'
import { CardsList } from 'components/CardsList/CardsList'
import OurFriendsCard from 'components/OurFriendsCard/OurFriendsCard'
import { onTitleStyles, onListStyles } from 'components/Utils/helpers/friendsResizeStyles';
import { fetchFriends } from 'redux/Friends/fetchFriends';
import { CardsLoader } from 'components/Utils/Loader/Loader';

const FriendsPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [friends, setFriends] = useState([])
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    onFirstRender()  
  }, [])
  
  const onFirstRender = async () => {
        try {
            setIsLoading(true)
            const results = await fetchFriends();
            setFriends(results);
        } catch (e) {
            Notiflix.Notify.failure(e.message)
        } finally {
            setIsLoading(false)
        }
    }

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
      <Title style={onTitleStyles(windowSize)}>Our friends</Title>
      {isLoading ? <CardsLoader /> : <CardsList styles={onListStyles(windowSize)}  cardsArray={friends} CardsItem={OurFriendsCard} />}        
    </PageSection>
}

export default FriendsPage;