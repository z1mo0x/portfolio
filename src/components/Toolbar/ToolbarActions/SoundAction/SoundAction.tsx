import { useEffect, useRef, useState } from 'react'
import styles from './SoundAction.module.scss'
import maxVolume from '../../../../assets/img/sound-max.png'
import minVolume from '../../../../assets/img/sound-min.png'
import mediumVolume from '../../../../assets/img/sound-medium.png'
import muteVolume from '../../../../assets/img/sound-mute.png'
import { useClickOutside } from '../../../../hooks/useClickOutside'
import Popup from '../../../ToolbarPopup/ToolbarPopup'

type Props = {}

function SoundAction({ }: Props) {

    const [volume, setVolume] = useState<number>(100)
    const [isVolumeOpen, setIsVolumeOpen] = useState(false)
    const [volumeIcon, setVolumeIcon] = useState(maxVolume)
    const [isMute, setIsMute] = useState(false);
    const volumeRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(volumeRef, () => setIsVolumeOpen(false));

    useEffect(() => {
        updateRange();
        handleIcon()
    }, [volume])

    function updateRange() {
        const rangeInput = document.getElementById('myRange') as HTMLInputElement;
        if (rangeInput) {
            const value = (Number(rangeInput.value) - Number(rangeInput.min)) / (Number(rangeInput.max) - Number(rangeInput.min)) * 100;
            rangeInput.style.setProperty('--value', value + '%');
        }
    }

    function handleIcon() {
        setIsMute(false)
        if (volume === 0 || volume < 1) {
            setVolumeIcon(muteVolume);
        }
        else if (volume < 33) {
            setVolumeIcon(minVolume);
        }
        else if (volume <= 65) {
            setVolumeIcon(mediumVolume);
        }
        else {
            setVolumeIcon(maxVolume);
        }
    }

    function handleVolumeOpen(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        setIsVolumeOpen(prev => !prev);
    }

    function handleSetMute() {
        if (!isMute) {
            setIsMute(true)
        }
        else {
            setIsMute(false)
        }
    }

    return (
        <>
            <div onClick={handleVolumeOpen}
                className={`${styles.volume} icon`}>
                {isMute
                    ?
                    <img src={muteVolume} alt="" />
                    :
                    <img src={volumeIcon} alt="" />
                }

            </div>
            <Popup ref={volumeRef} isOpen={isVolumeOpen}>
                <div className={styles.popup__select}>
                    <div className={styles.popup__title}>Speakers (High Definition Audio Device)</div>
                </div>
                <div className={styles.popup__range}>
                    {isMute
                        ?
                        <img src={muteVolume} title="Включить/Выключить звук" onClick={handleSetMute} />
                        :
                        <img
                            src={volumeIcon}
                            title="Включить/Выключить звук"
                            onClick={handleSetMute}
                        />
                    }
                    <input type="range"
                        value={volume}
                        id='myRange'
                        min={0}
                        max={100}
                        onChange={(e) => {
                            setVolume(Number(e.target.value))
                        }}
                    />
                    <div className={styles.popup__value}>
                        {volume}
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default SoundAction