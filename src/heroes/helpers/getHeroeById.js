import { heroes } from "../data/heroes"

export const getHeroeById = (id) => {
    return heroes.find(x => x.id === id);
}