import s from "./Daily.module.scss"
import Day from "./Day"
import { useSelector } from "react-redux"

const Daily = () => {
  const { daily } = useSelector((state) => state.weather.data)
  return (
    <>
      <div className={s.daily}>
        {
          daily.map((day, i) => (
            <Day key={i} day={day} i={i} />
          ))
        }
      </div>
    </>
  )
}

export default Daily
