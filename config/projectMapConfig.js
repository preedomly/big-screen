var projectMapConfig = {
  // 按配置顺序加载
  tileLayers: [
    {
      url: 'http://192.168.10.252:8889/ServiceEngine/rest/services/dxt/MapServer',
    },
  ],
  vectorLayers: [
    
  ],
  api: 'http://192.168.8.29:8085/ecity_js_api1.0',// https://js.arcgis.com/4.8/',
  maxscale: '250000',
  minscale: '500',
}