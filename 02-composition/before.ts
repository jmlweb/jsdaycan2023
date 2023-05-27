const getHours = (date: Date) => date.getHours();
const isOpeningHours = (hours: number) => hours >= 8 && hours <= 17;

export const result = isOpeningHours(getHours(new Date()));
