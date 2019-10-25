var projectMapConfig = {
  // 按配置顺序加载
  tileLayers: [
    {
      url: 'proxy6080/arcgis/rest/services/kqgpsdp/kqdp/MapServer',
    }

  ],
  vectorLayers: [
    {
      url: 'proxy6080/arcgis/rest/services/kqgps/kqdppszgx_sl/MapServer',
    }
  ],
  // api: 'http://192.168.30.212:8085',
  // api: 'http://192.168.8.29:8085/ecity_js_api1.0',
  api: 'http://2140u809i6.imwork.net:10678/ecity_js_api1.0',
  maxscale: '250000',
  minscale: '25000',
  width: 3700,
  height: 1780,
}