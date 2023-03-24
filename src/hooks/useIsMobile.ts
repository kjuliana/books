import {useEffect, useState} from 'react';

const media = matchMedia('(max-width: 767px)');

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(media.matches);

    useEffect(() => {
        const onMediaChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsMobile(event.matches)
        }
        media.addEventListener('change',onMediaChange);
        return () => {
            media.removeEventListener('change', onMediaChange)
        }
    }, []);
    return isMobile;
};