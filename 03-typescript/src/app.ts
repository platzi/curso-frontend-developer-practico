import { findHeroById } from './services/heroes.service'

const hero = findHeroById(4);

console.log(hero?.name ?? 'Heroe no encontrado!!');