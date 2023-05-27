import { somethingExternal } from './somethingExternal';

const hours = new Date().getHours();

if (hours >= 8 && hours <= 17) {
  somethingExternal();
}
