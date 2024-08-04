import { sun, rain, minicloud, minirain, sunrain, cloud } from "./reExport";

export const weatherName = {
    'дымка': minicloud,
    'ясно': sun,
    'небольшая облачность': cloud,
    'пасмурно': cloud,
    'облачно с прояснениями': sunrain,
    'небольшой дождь': minirain,
    'дождь': rain,
    'переменная облачность': cloud,
}

