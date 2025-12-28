export const getActiveMetrikaId = (): number | null => {
  const host =
    typeof window !== 'undefined'
      ? window.location.hostname.replace(/^www\./, '').toLowerCase()
      : ''
  const isIrkutskHost = host.startsWith('irkutsk.')

  const raw =
    (isIrkutskHost
      ? process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID_IRKUTSK
      : process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID_KHABAROVSK) ||
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID

  const id = Number(raw)
  return Number.isFinite(id) && id > 0 ? id : null
}
