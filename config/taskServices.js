var taskServices = {
  proxy: [
    {
      url: './proxy.jsp',
      desc: '默认代理,没有名称',
      name: 'a',
      status: '0',
    }
  ],
  service: [
    {
      name: 'BIG_SCREEN',
      description: '大屏1',
      url: 'proxy8080/ServiceEngine/rest/services/lwServer',
      proxy: '',
    },
    {
      name: 'NET_SVR',
      description: '地图查询',
      url: 'proxy8889/ServiceEngine/rest/services/NetServer/kqgps',
      proxy: '',
    },
    {
      name: 'LW_SVR',
      description: 'tip框查询',
      url: 'proxy8080/ServiceEngine/rest/services/lwServer',
      proxy: '',
    }
  ],
};
