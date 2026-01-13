/**
 * Google Maps API 服務層
 * 負責 Google Maps 初始化、標記管理等核心功能
 */

declare global {
  interface Window {
    google: any
  }
}

class MapService {
  private static instance: MapService
  private map: any = null
  private markers: Map<string, any> = new Map()
  private infoWindow: any = null
  private apiKey: string

  private constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  /**
   * 獲取或創建單例
   */
  static getInstance(apiKey: string): MapService {
    if (!MapService.instance) {
      MapService.instance = new MapService(apiKey)
    }
    return MapService.instance
  }

  /**
   * 動態加載 Google Maps 腳本
   */
  private async loadGoogleMapsScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if ((window as any).google && (window as any).google.maps) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=maps`
      script.async = true
      script.defer = true
      script.onerror = () => reject(new Error('Failed to load Google Maps'))
      script.onload = () => {
        setTimeout(() => resolve(), 100)
      }
      document.head.appendChild(script)
    })
  }

  /**
   * 初始化地圖
   */
  async initMap(
    containerId: string,
    options: any = {}
  ): Promise<any> {
    try {
      // 加載 Google Maps 腳本
      await this.loadGoogleMapsScript()

      const mapContainer = document.getElementById(containerId)
      if (!mapContainer) {
        throw new Error(`Map container with id "${containerId}" not found`)
      }

      const google = window.google
      if (!google || !google.maps) {
        throw new Error('Google Maps API failed to load')
      }

      this.map = new google.maps.Map(mapContainer, {
        zoom: 14,
        center: { lat: 24.1643863, lng: 120.6729866 }, // 台中預設位置
        ...options
      })

      return this.map
    } catch (error) {
      console.error('Map initialization error:', error)
      throw error
    }
  }

  /**
   * 獲取當前地圖實例
   */
  getMap(): any {
    if (!this.map) {
      throw new Error('Map not initialized. Call initMap first.')
    }
    return this.map
  }

  /**
   * 添加標記點
   */
  addMarker(
    projectId: string,
    location: { lat: number; lng: number },
    title: string,
    options?: any
  ): any {
    if (!this.map) {
      throw new Error('Map not initialized')
    }

    const google = (window as any).google

    // 如果標記已存在，先移除
    if (this.markers.has(projectId)) {
      this.markers.get(projectId)?.setMap(null)
    }

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: title,
      ...options
    })

    this.markers.set(projectId, marker)
    return marker
  }

  /**
   * 批量添加標記
   */
  addMarkers(
    projects: Array<{
      id: string
      name: string
      location: { lat: number; lng: number }
      icon?: string
    }>
  ): void {
    projects.forEach((project) => {
      this.addMarker(project.id, project.location, project.name, {
        icon: project.icon
      })
    })
  }

  /**
   * 清除所有標記
   */
  clearMarkers(): void {
    this.markers.forEach((marker) => marker.setMap(null))
    this.markers.clear()
  }

  /**
   * 獲取指定標記
   */
  getMarker(projectId: string): any {
    return this.markers.get(projectId)
  }

  /**
   * 移除指定標記
   */
  removeMarker(projectId: string): void {
    const marker = this.markers.get(projectId)
    if (marker) {
      marker.setMap(null)
      this.markers.delete(projectId)
    }
  }

  /**
   * 為標記添加點擊事件
   */
  addMarkerClickListener(
    projectId: string,
    callback: (marker: any) => void
  ): void {
    const marker = this.markers.get(projectId)
    if (marker) {
      marker.addListener('click', () => callback(marker))
    }
  }

  /**
   * 顯示信息窗口
   */
  showInfoWindow(
    content: string | HTMLElement,
    location: { lat: number; lng: number }
  ): void {
    if (!this.map) return

    const google = (window as any).google

    if (!this.infoWindow) {
      this.infoWindow = new google.maps.InfoWindow()
    }

    this.infoWindow.setContent(content)
    this.infoWindow.setPosition(location)
    this.infoWindow.open(this.map)
  }

  /**
   * 關閉信息窗口
   */
  closeInfoWindow(): void {
    if (this.infoWindow) {
      this.infoWindow.close()
    }
  }

  /**
   * 設置地圖中心
   */
  setCenter(location: { lat: number; lng: number }): void {
    if (this.map) {
      this.map.setCenter(location)
    }
  }

  /**
   * 設置地圖縮放級別
   */
  setZoom(zoom: number): void {
    if (this.map) {
      this.map.setZoom(zoom)
    }
  }

  /**
   * 適應邊界（自動調整視圖以顯示所有標記）
   */
  fitBounds(): void {
    if (!this.map || this.markers.size === 0) return

    const google = (window as any).google
    const bounds = new google.maps.LatLngBounds()
    
    this.markers.forEach((marker) => {
      bounds.extend(marker.getPosition())
    })

    this.map.fitBounds(bounds)
  }

  /**
   * 獲取地圖中心坐標
   */
  getCenter(): any {
    return this.map?.getCenter()
  }

  /**
   * 獲取地圖當前縮放級別
   */
  getZoom(): number | undefined {
    return this.map?.getZoom()
  }

  /**
   * 銷毀地圖實例（清理資源）
   */
  destroy(): void {
    this.clearMarkers()
    this.closeInfoWindow()
    this.map = null
    MapService.instance = null!
  }
}

export default MapService
