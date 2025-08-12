import { useEffect, useState } from 'react'
import styles from './SoundAction.module.scss'
import maxVolume from '../../../../assets/img/sound-max.png'
import minVolume from '../../../../assets/img/sound-min.png'
import mediumVolume from '../../../../assets/img/sound-medium.png'
import muteVolume from '../../../../assets/img/sound-mute.png'

type Props = {}

function SoundAction({ }: Props) {
    const [volume, setVolume] = useState<number>(100)
    const [volumeIcon, setVolumeIcon] = useState(maxVolume)

    useEffect(() => {
        handleIcon()
    }, [volume])

    function handleIcon() {
        if (volume === 0 || volume < 1) {
            setVolumeIcon(muteVolume);
            console.log('mute');
        }
        else if (volume < 33) {
            setVolumeIcon(minVolume);
            console.log('min');
        }
        else if (volume <= 65) {
            setVolumeIcon(mediumVolume);
            console.log('medium');
        }
        else {
            setVolumeIcon(maxVolume);
            console.log('max');
        }
    }

    return (
        <div className={styles.volume__wrap}>
            <div className={`${styles.volume} icon`}>
                <img src={volumeIcon} alt="" />
            </div>
            <div className={styles.popup}>
                <div className={styles.popup__wrapper}>
                    <div className={styles.popup__title}>Speakers (High Definition Audio Device)</div>
                    <div className={styles.popup__range}>
                        <img src={volumeIcon} alt="" />
                        <input type="range" value={volume}
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
                </div>
            </div>
        </div>
    )
}

export default SoundAction