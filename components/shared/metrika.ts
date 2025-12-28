type CityKey = 'khabarovsk' | 'irkutsk'

const normalizeHost = (host: string) => host.replace(/^www\./, '').toLowerCase()

export const getCityByHost = (host: string): CityKey => {
  const h = normalizeHost(host)
  return h.startsWith('irkutsk.') ? 'irkutsk' : 'khabarovsk'
}

export const getMetrikaIdByHost = (host: string): number | null => {
  const city = getCityByHost(host)
  const raw =
    (city === 'irkutsk'
      ? process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID_IRKUTSK
      : process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID_KHABAROVSK) ||
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID

  const id = Number(raw)
  return Number.isFinite(id) && id > 0 ? id : null
}

export const getActiveMetrikaId = (): number | null => {
  if (typeof window === 'undefined') return null
  return getMetrikaIdByHost(window.location.hostname)
}

export const reachMetrikaGoal = (goalId: string) => {
  if (!goalId || typeof window === 'undefined') return
  const counterId = getActiveMetrikaId()
  const ym = (window as Window & { ym?: (id: number, action: string, goal: string) => void }).ym
  if (!counterId || !ym) return
  ym(counterId, 'reachGoal', goalId)
}
