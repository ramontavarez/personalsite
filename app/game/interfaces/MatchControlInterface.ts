import { CardDataInterface } from "./CardDataInterface";

export interface MatchControlInterface {
    card: CardDataInterface;
    setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
}