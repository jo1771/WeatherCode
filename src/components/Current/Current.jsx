import s from "./Current.module.scss"
import {
  temp,
  davlenie,
  wind,
  osadki,
  sun,
  headerBg,
} from "../../utils/reExport"
import { useSelector } from "react-redux"
import { getTime } from "../../utils/getTime"
import { weatherName } from "../../utils/getImg"
const Current = () => {
  const { data } = useSelector((state) => state.weather)
  const degree = Math.round(data.current.temp)
  const time = getTime(data.timezone)
  const city = data.city
  const { description } = data.current.weather[0]
  const weatherImg = weatherName[description] || weatherName["пасмурно"]
  const items = [
    {
      img: temp,
      text: `Температура`,
      value: `${degree}° - ощущается как ${data?.current?.feels_like || 17}°`,
    },
    {
      img: davlenie,
      text: `Давление`,
      value: `${data.current.pressure} мм`,
    },
    {
      img: osadki,
      text: `Облочность`,
      value: `${data.current.clouds}%`,
    },
    {
      img: wind,
      text: `Ветер`,
      value: `${Math.round(data.current.wind_speed)} м/с `,
    },
  ]

  return (
    <>
      <section className={s.current}>
        <div className={s.current__left}>
          <p className={s.current__left_degree}>{degree}°</p>
          <p className={s.current__left_today}>Сегодня</p>
          <p className={s.current__left_time}>Время: {time}</p>
          <p className={s.current__left_city}>Город: {city}</p>
          <img
            src={weatherImg}
            alt={description}
            title={description}
            className={s.current__left_img}
          />
        </div>
        <div className={s.current__right}>
          <img src={headerBg} alt="" className={s.current__right_img} />
          {items.map((item) => (
            <div key={item.text} className={s.current__right_item}>
              <div className={s.current__right_item_icon}>
                <img src={item.img} alt="" />
              </div>
              <p className={s.current__right_item_text}>{item.text}</p>
              <p className={s.current__right_item_value}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Current
