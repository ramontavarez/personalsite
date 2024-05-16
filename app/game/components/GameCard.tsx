'use client';
import React, { useEffect, useState } from 'react'
import { CardDataInterface } from '../interfaces/CardDataInterface';
import { MatchControlInterface } from '../interfaces/MatchControlInterface';

interface GameCardProps {
    card: CardDataInterface;
    matchControl: MatchControlInterface[];
    setMatchControl: React.Dispatch<React.SetStateAction<MatchControlInterface[]>>
}
const GameCard = ({ card, matchControl, setMatchControl }: GameCardProps) => {
    const [flipped, setFlipped] = useState<boolean>(false);
    const [frontCardClass, setFrontCardClass] = useState<string>("hidden");
    const [backCardClass, setBackCardClass] = useState<string>("");

    const frontCardDefaultClass = "absolute w-32 h-36 border-4 border-gray-700 rounded-sm bg-gray-200 transition-all duration-[250] [transform:rotateY(180deg)]";
    const backCardDefaultClass = "absolute w-32 h-36 border-4 border-gray-700 rounded-sm bg-gray-500 transition-all duration-[250]";

    useEffect(() => {
        setBackCardClass("hidden");
        setFrontCardClass("hidden");
        setTimeout(() => {
            if (flipped) {
                setFrontCardClass("");
            } else {
                setBackCardClass("");
            }
        }, 250)
    }, [flipped])

    function handleCardClick() {
        if (matchControl.length === 2) return;
        if (!flipped) {
            setFlipped(true);
            setMatchControl(prev => [...prev, { card, setFlipped }])
        }
    }

    return (
        <div className={`w-32 h-36 `} onClick={() => handleCardClick()}>
            <div className={`relative w-32 h-36 transition-all duration-500 shadow-md ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
                <div className={`${backCardDefaultClass} ${backCardClass}`}>
                </div>
                <div className={`${frontCardDefaultClass} ${frontCardClass}`}>
                    <img src={card.image} className='h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default GameCard