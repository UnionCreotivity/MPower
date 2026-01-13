/**
 * 坐標工具函數
 * 提供地理位置相關的工具方法
 */

/**
 * 計算兩點之間的距離（Haversine 公式）
 * @param lat1 第一點緯度
 * @param lng1 第一點經度
 * @param lat2 第二點緯度
 * @param lng2 第二點經度
 * @returns 距離（單位：公里）
 */
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371 // 地球平均半徑（公里）
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * 度轉弧度
 */
function toRad(degrees: number): number {
  return (degrees * Math.PI) / 180
}

/**
 * 計算中心點
 */
export function calculateCenter(
  coordinates: Array<{ lat: number; lng: number }>
): { lat: number; lng: number } {
  if (coordinates.length === 0) {
    return { lat: 0, lng: 0 }
  }

  const sum = coordinates.reduce(
    (acc, coord) => ({
      lat: acc.lat + coord.lat,
      lng: acc.lng + coord.lng
    }),
    { lat: 0, lng: 0 }
  )

  return {
    lat: sum.lat / coordinates.length,
    lng: sum.lng / coordinates.length
  }
}

/**
 * 格式化距離（自動選擇單位）
 */
export function formatDistance(km: number): string {
  if (km < 1) {
    return `${(km * 1000).toFixed(0)}m`
  }
  return `${km.toFixed(1)}km`
}

/**
 * 判斷點是否在邊界內
 */
export function isPointInBounds(
  point: { lat: number; lng: number },
  bounds: { ne: { lat: number; lng: number }; sw: { lat: number; lng: number } }
): boolean {
  return (
    point.lat >= bounds.sw.lat &&
    point.lat <= bounds.ne.lat &&
    point.lng >= bounds.sw.lng &&
    point.lng <= bounds.ne.lng
  )
}
