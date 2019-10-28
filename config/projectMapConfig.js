const projectMapConfig = {
  OneMap: {
    // 按配置顺序加载
    tileLayers: [
      {
        id: "kqdp",
        url: 'proxy6080/arcgis/rest/services/kqgpsdp/kqdp/MapServer',
      }
    ],
    vectorLayers: [
      {
        id: "kqdppszgx_sl",
        url: 'proxy6080/arcgis/rest/services/kqgps/kqdppszgx_sl/MapServer',
      }
    ],
    // api: 'http://192.168.8.29:8085/ecity_js_api1.0',
    api: 'http://2140u809i6.imwork.net:10678/ecity_js_api1.0',
    maxscale: '500000',
    minscale: '2000',
    centerx: 53000, // 中心点X坐标
    centery: 44000, // 中心点Y坐标
    initlevel: 5,   // 初始化放大至
    extent: {
      xmin: 525098.7384641441,
      xmax: 579295.0385234108,
      ymin: 3285906.383879434,
      ymax: 3353190.8538650405
    },  // 全部大小范围
    width: 1033,  // 地图大小
    height: 645, // 地图大小
  },
  TwoMap: {
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
    // api: 'http://192.168.8.29:8085/ecity_js_api1.0',
    api: 'http://2140u809i6.imwork.net:10678/ecity_js_api1.0',
    maxscale: '500000',
    minscale: '2000',
    centerx: 53000,
    centery: 44000,
    initlevel: 5,
    extent: {
      xmin: 525098.7384641441,
      xmax: 579295.0385234108,
      ymin: 3285906.383879434,
      ymax: 3353190.8538650405
    },
    width: 1033,  // 地图大小
    height: 645, // 地图大小
  },
  thridMap: {
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
    // api: 'http://192.168.8.29:8085/ecity_js_api1.0',
    api: 'http://2140u809i6.imwork.net:10678/ecity_js_api1.0',
    maxscale: '500000',
    minscale: '2000',
    centerx: 53000,
    centery: 44000,
    initlevel: 5,
    extent: {
      xmin: 525098.7384641441,
      xmax: 579295.0385234108,
      ymin: 3285906.383879434,
      ymax: 3353190.8538650405
    },
    width: 1210,  // 地图大小
    height: 880, // 地图大小
  }
}