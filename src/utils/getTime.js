export function getTime(dt) {
    return new Date().toLocaleString('ru-Ru', {
        timeZone: dt,
        hourCycle: 'h23',
        timeStyle: 'short',
    })
}