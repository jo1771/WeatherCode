export function getDate(dt, type) {
    const date = new Date(dt * 1000)
    return type == "week" ? date.toLocaleString('ru-Ru', {
        weekday: 'short'
    }) : type == "week" ? date.toLocaleString('ru-Ru', {
        weekday: 'numeric'
    }) : type == "week" ? date.toLocaleString('ru-Ru', {
        month: 'short'
    }) : ''
}