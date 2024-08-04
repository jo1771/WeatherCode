import Current from "./components/Current/Current"
import Navbar from "./components/Navbar/Navbar"
import Daily from "./components/Daily/Daily"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getLatLon } from "./store/weather/weatherSlice"
import Loader from "./components/UI/Loader"
function App() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.weather)

  useEffect(() => {
    dispatch(getLatLon("Ташкент"))
  }, [])

  return (
    <>
      <div className={`wrapper `}>
        {data ? (
          <div className="container">
            <Navbar />
            <main className="main">
              <Current />
              <Daily />
            </main>
          </div>
        ) : (
          <Loader/>
        )}
      </div>
    </>
  )
}

export default App
