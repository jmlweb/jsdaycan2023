import { somethingExternal } from './somethingExternal';

// Esta función es pura, ya que no depende de nada externo a ella y siempre
// va a devolver el mismo resultado para los mismos parámetros
export const isOpeningHours = (hours: number) => hours >= 8 && hours <= 17;

// Como podemos observar no estamos eliminando los efectos colaterales,
// simplemente los estamos aislando.
if (isOpeningHours(new Date().getHours())) {
  somethingExternal();
}
