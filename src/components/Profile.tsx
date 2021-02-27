import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/silviocremm.png" alt="Silvio Cremm" />
            <div>
                <strong>Silvio Cremm</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}