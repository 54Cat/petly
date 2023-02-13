import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserOperation } from '../../../redux/User/userOperations';
import { getAuth } from 'redux/selectors';
import ModalAddNewNotice from 'components/Modals/ModalAddNewNotice/ModalAddNewNotice';
import {
    NoticesCategoriesNavList,
    NoticesCategoriesNavButton,
} from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNavStyled';

export const NoticesCategoriesNav = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(getAuth);

    useEffect(() => {
        dispatch(getUserOperation());
    }, [dispatch]);

    const { category } = useParams();

    return (
        <NoticesCategoriesNavList>
            <NoticesCategoriesNavButton
                to={'/notices/sell'}
                style={
                    category === 'sell'
                        ? {
                              color: '#ffffff',
                              backgroundColor: '#F59256',
                              outline: 0,
                          }
                        : undefined
                }
            >
                sell
            </NoticesCategoriesNavButton>
            <NoticesCategoriesNavButton
                to={'/notices/lost-found'}
                style={
                    category === 'lost-found'
                        ? {
                              color: '#ffffff',
                              backgroundColor: '#F59256',
                              outline: 0,
                          }
                        : undefined
                }
            >
                lost/found
            </NoticesCategoriesNavButton>
            <NoticesCategoriesNavButton
                to={'/notices/for-free'}
                style={
                    category === 'for-free'
                        ? {
                              color: '#ffffff',
                              backgroundColor: '#F59256',
                              outline: 0,
                          }
                        : undefined
                }
            >
                In good hands
            </NoticesCategoriesNavButton>
            {isLoggedIn && (
                <NoticesCategoriesNavButton
                    to={'/notices/favorite'}
                    style={
                        category === 'favorite'
                            ? {
                                  color: '#ffffff',
                                  backgroundColor: '#F59256',
                                  outline: 0,
                              }
                            : undefined
                    }
                >
                    favorite ads
                </NoticesCategoriesNavButton>
            )}
            {isLoggedIn && (
                <NoticesCategoriesNavButton
                    to={'/notices/own'}
                    style={
                        category === 'own'
                            ? {
                                  color: '#ffffff',
                                  backgroundColor: '#F59256',
                                  outline: 0,
                              }
                            : undefined
                    }
                >
                    my ads
                </NoticesCategoriesNavButton>
            )}
            <ModalAddNewNotice></ModalAddNewNotice>
        </NoticesCategoriesNavList>
    );
};
