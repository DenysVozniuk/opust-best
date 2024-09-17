import MySwiper from '../../../SwiperComponent';
import Slides from '../../../Slides';
import { useTranslation } from 'react-i18next';
import bestBooksScreenWidthData from './Data/screenWidthData';
import useScreenResize from '../../../../Hooks/useScreenResize';
import useResizeListener from '../../../../Hooks/useResizeListener';

function BestBooks() {
    const { BestBooksSlider } = Slides();
    const bestBooksSlider: JSX.Element[] = BestBooksSlider();
    const { t } = useTranslation();
    const initialState: number = 4;
    const { slPerView, handleScreenWidthResizeForSlides } = useScreenResize(initialState);
    
    useResizeListener(handleScreenWidthResizeForSlides, bestBooksScreenWidthData);

    return(
        <div className='best-books-block'>
            <h2 className='h2 best-books-h2'>{t('Best Books')}</h2>
            <div className='best-books'>
                <MySwiper
                    slides={bestBooksSlider}
                    classN={'swiper-best-books'}
                    spBetween={10}
                    slPerView={slPerView}
                    topValue={56 + '%'}
                />
            </div>
        </div>
    );
}

export default BestBooks;
