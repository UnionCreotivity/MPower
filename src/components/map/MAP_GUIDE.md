# Google Map 功能使用指南

## 環境配置

### 1. 設置 API Key

在 `.env.local` 文件中添加 Google Maps API Key：

```env
VITE_GOOGLE_MAP_API_KEY=your_google_maps_api_key_here
```

**獲取 API Key 步驟：**
1. 訪問 [Google Cloud Console](https://console.cloud.google.com/)
2. 創建新項目
3. 啟用 Maps JavaScript API
4. 在 Credentials 中創建 API Key
5. 限制 API Key 為特定網域（生產環境推薦）

### 2. 更新 TypeScript 類型

在 `tsconfig.json` 中確保包含 Google Maps 類型：

```json
{
  "compilerOptions": {
    "types": ["@googlemaps/js-api-loader"]
  }
}
```

## 項目結構

```
src/
├── components/map/
│   ├── GoogleMap.vue           # 主地圖組件
│   └── MapMarkerModal.vue      # 標記彈窗組件
├── services/
│   ├── mapService.ts           # Google Maps API 封裝
│   └── geoUtils.ts             # 地理工具函數
├── stores/
│   └── mapStore.ts             # Pinia 狀態管理
├── assets/
│   ├── data/mapProjects.json   # 項目數據配置
│   └── scss/map/               # 樣式文件
└── views/
    └── map/
        └── MapView.vue         # 地圖頁面視圖
```

## 使用方法

### 基本使用

在您的頁面中引入 `GoogleMap` 組件：

```vue
<template>
  <div class="map-section">
    <GoogleMap />
  </div>
</template>

<script setup lang="ts">
import GoogleMap from '@/components/map/GoogleMap.vue'
</script>
```

### 配置項目數據

編輯 `src/assets/data/mapProjects.json`：

```json
{
  "datasets": [
    {
      "id": "unique_id",
      "name": "地區名稱",
      "center": { "lat": 25.033, "lng": 121.5654 },
      "zoom": 13,
      "projects": [
        {
          "id": "project_001",
          "name": "建案名稱",
          "location": { "lat": 25.033, "lng": 121.5654 },
          "address": "完整地址",
          "image": "/images/project.jpg",
          "description": "建案介紹",
          "price": "NT$...",
          "link": "/mansion/detail"
        }
      ]
    }
  ]
}
```

### 動態添加項目

使用 Pinia Store 動態管理項目：

```typescript
import { useMapStore } from '@/stores/mapStore'

const mapStore = useMapStore()

// 添加項目
mapStore.addProject({
  id: 'new_project',
  name: '新建案',
  location: { lat: 25.033, lng: 121.5654 },
  address: '台北市中山區',
  description: '新的建案項目',
  price: 'NT$40,000,000'
})

// 移除項目
mapStore.removeProject('project_id')

// 更新項目
mapStore.updateProject('project_id', {
  name: '更新的名稱',
  description: '更新的描述'
})
```

### 使用 MapService

直接操作 Google Maps API：

```typescript
import MapService from '@/services/mapService'

const mapService = MapService.getInstance('YOUR_API_KEY')

// 初始化地圖
await mapService.initMap('map-container', {
  center: { lat: 25.033, lng: 121.5654 },
  zoom: 12
})

// 添加單個標記
mapService.addMarker('id', { lat: 25.033, lng: 121.5654 }, 'title')

// 設置中心
mapService.setCenter({ lat: 25.033, lng: 121.5654 })

// 適應所有標記
mapService.fitBounds()

// 清理資源
mapService.destroy()
```

## API 參考

### MapService

#### 方法

| 方法 | 描述 | 參數 |
|------|------|------|
| `initMap()` | 初始化地圖 | `containerId, options` |
| `addMarker()` | 添加標記 | `id, location, title, options` |
| `addMarkers()` | 批量添加標記 | `projects[]` |
| `clearMarkers()` | 清除所有標記 | - |
| `removeMarker()` | 移除指定標記 | `id` |
| `getMarker()` | 獲取標記實例 | `id` |
| `addMarkerClickListener()` | 添加點擊事件 | `id, callback` |
| `setCenter()` | 設置中心 | `location` |
| `setZoom()` | 設置縮放 | `zoom` |
| `fitBounds()` | 自適應邊界 | - |
| `showInfoWindow()` | 顯示信息窗口 | `content, location` |
| `closeInfoWindow()` | 關閉信息窗口 | - |
| `destroy()` | 銷毀實例 | - |

### Store (Pinia)

#### 狀態

- `datasets` - 所有項目集
- `currentDatasetId` - 當前項目集 ID
- `selectedProjectId` - 選中項目 ID
- `showModal` - 是否顯示彈窗

#### 方法

- `setDatasets(datasets)` - 設置項目集
- `setCurrentDataset(id)` - 切換項目集
- `selectProject(id)` - 選中項目
- `deselectProject()` - 取消選擇
- `addProject(project)` - 添加項目
- `removeProject(id)` - 移除項目
- `updateProject(id, updates)` - 更新項目

## RWD 佈局

組件已針對以下斷點進行優化：

- **桌面** (1024px+) - 地圖+側邊欄水平佈局
- **平板** (768px - 1024px) - 自適應寬度
- **手機** (480px - 768px) - 地圖+下方列表垂直佈局
- **超小手機** (<480px) - 完全適配小屏幕

## 性能優化建議

1. **圖片優化** - 使用 WebP 格式和適當的圖片大小
2. **延遲加載** - 標記數量多時考慮使用集群（Marker Clustering）
3. **事件委托** - 使用 MapService 的事件系統
4. **資源清理** - 在組件卸載時調用 `mapService.destroy()`

## 常見問題

### API Key 無效

檢查：
- 確認 `VITE_GOOGLE_MAP_API_KEY` 環境變量已設置
- API Key 是否已啟用 Maps JavaScript API
- 網域是否在 API Key 的授權列表中

### 標記不顯示

檢查：
- 坐標是否有效（緯度 -90~90，經度 -180~180）
- 地圖是否已成功初始化
- 標記的 `map` 參數是否正確設置

### 性能問題

優化方案：
- 減少標記數量，使用集群
- 優化彈窗內容（避免複雜 DOM）
- 使用懶加載載入項目數據

## 相關文檔

- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [Google Maps Markers](https://developers.google.com/maps/documentation/javascript/markers)
- [Vue 3 Official](https://vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
