import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isAllowedToPlay, setIsAllowedToPlay] = useState(false);

    useEffect(() => {
        const handleUserClick = () => {
            setIsAllowedToPlay(true);
            document.removeEventListener('click', handleUserClick); 
        };
        document.addEventListener('click', handleUserClick);

        return () => {
            document.removeEventListener('click', handleUserClick);
        };
    }, []);

    useEffect(() => {
        if (isAllowedToPlay && audioRef.current) {
            audioRef.current.play();
        }
    }, [isAllowedToPlay]);

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/audio/bluey_theme_full.mp3" type="audio/mp3" />
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
    );
};

export default BackgroundMusic;
