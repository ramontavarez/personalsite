'use client';

import React, { useEffect, useState } from 'react'
import GameCard from './components/GameCard';
import { Badge } from '../../components/ui/badge';
import { MatchControlInterface } from './interfaces/MatchControlInterface';
import { CardDataInterface } from './interfaces/CardDataInterface';

const Game = ({ cards }: { cards: CardDataInterface[] }) => {
    const [matches, setMatches] = useState<string[]>([]);
    const [matchControl, setMatchControl] = useState<MatchControlInterface[]>([]);

    useEffect(() => {
        if (matchControl.length === 2) {
            if (matchControl[0].card.value === matchControl[1].card.value) {
                setMatches(prev => [...prev, matchControl[0].card.value]);
                setMatchControl([]);
            } else {
                setTimeout(() => {
                    matchControl.forEach((control) => control.setFlipped(false));
                    setMatchControl([]);
                }, 1000)

            }
        }
    }, [matchControl])
    return (
        <div className="container max-w-screen-lg mx-auto px-24 mb-8">
            <div className="w-full">
                <div className="w-full flex flex-wrap gap-1 mb-4 items-center">
                    <h3 className='font-semibold'>O que eu mais utilizo:</h3>
                    {matches.length > 0 ? matches.map((match, index) => (
                        <Badge key={index}>{match}</Badge>
                    )) : (
                        <span className="text-sm ml-2">Clique nos cards abaixo para descobrir 😃</span>
                    )}
                </div>
            </div>
            <div className='w-full rounded-sm border-2 p-2 grid grid-cols-6 gap-2'>
                {cards.map((card, index) => (
                    <GameCard key={index} card={card} matchControl={matchControl} setMatchControl={setMatchControl} />
                ))}
            </div>
        </div>
    )
}

export default Game