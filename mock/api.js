function _c(data, msgCode, message) {
  msgCode = msgCode || 0;
  message = message || '';
  data = data || null;
  return {
    msgCode,
    data,
    message,
  };
}

function getUserList(params) {
  console.log(params);
  return _c({
    name: 'wind',
    age: 22,
  });
}

/**
 * @typedef {Object} MockOutputOption
 * @property {'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE'} method - 方法
 * @property {object} get - get 请求参数
 * @property {object} post - post 请求参数
 * @property {object} input - 合并 get 与 post 请求参数
 * @property {object} random - Mock.Random 方法，提供一系列随机数生成工具
 */

/**
 *
 * @param {MockOutputOption} params
 */
function getUserList1(params) {
  console.log(params);
  return {
    isSuccess: true,
    msg: '获取成功',
    time: '2019-04-29 09:50:48',
    servicecfg: [],
    mapcfg: {},
    user: {
      name: 'admin',
      id: 370,
      trueName: '隔壁小黑',
      uid: 370,
      username: 'admin',
      gid: 370,
      groupId: '2',
      groupCode: '1-1',
      groupLev: '0',
      groupName: '常州排水管理处',
      phone: '324214',
      email: '342141234',
      ecode: '',
      company: '运维中心',
      role: [
        {
          name: '所长',
        },
        {
          name: '管网所科员',
        },
        {
          name: '接线员',
        },
        {
          name: '管理方',
        },
        {
          name: '片长',
        },
        {
          name: '组长',
        },
        {
          name: '管理员',
        },
        {
          name: '业务处理员',
        },
        {
          name: '延期退单审核人',
        },
        {
          name: '抢修科室小黑',
        },
        {
          name: '养护科室小黑',
        },
        {
          name: '巡检单位',
        },
        {
          name: 'ww',
        },
        {
          name: 'ww123',
        },
        {
          name: '测试名称',
        },
        {
          name: '劳务方管理',
        },
        {
          name: '劳务班组',
        },
        {
          name: '监理',
        },
        {
          name: '管网所管理',
        },
      ],
      roleCode:
        'Institute,networkClerk,operator,managementParty,Long,GroupLeader,admin,businessMng,Auditor,103,104,巡检外包,ww,ww123,测试名称,Labor_management,Labor_group,Supervisor,Pipe_management',
      menu: [
        {
          bottom: 0,
          configUrl: '',
          id: 496,
          imgUrl: '',
          left: 0,
          nodeID: 496,
          nodeName: '设施查询',
          orderID: 0,
          pageUrl: '',
          parentID: -1,
          right: 0,
          top: 0,
          children: [
            {
              bottom: 0,
              configUrl: '',
              id: 497,
              imgUrl: '',
              left: 0,
              nodeID: 497,
              nodeName: '点击查询',
              orderID: 0,
              pageUrl: '',
              parentID: 496,
              right: 0,
              top: 0,
            },
          ],
          services: [],
        },
      ],
    },
  };
}

function getUserList() {
  return {
    user: {
      username: 'dsdd',
      gid: 1,
      id: 1,
      groupId: '95',
      groupCode: '1-1-1-1',
      groupLev: '3',
      groupName: '廊坊燃气',
      phone: '',
      trueName: 'dsdd',
      email: '',
      ecode: '0011',
      company: '廊坊燃气',
      role: '系统管理员',
      roleCode: 'manager',
    },
    isSuccess: true,
    msg: '',
    time: '2019-05-09 10:17:22',
    menus: [
      {
        bottom: 0,
        configUrl: '',
        id: 8,
        imgUrl: '',
        left: 0,
        nodeID: 8,
        nodeName: '查询',
        orderID: 0,
        pageUrl: '',
        parentID: -1,
        right: 0,
        top: 0,
        children: [
          {
            bottom: 0,
            configUrl: '',
            id: 65,
            imgUrl: '',
            left: 0,
            nodeID: 65,
            nodeName: '点击查询',
            orderID: 0,
            pageUrl: '',
            parentID: 8,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 68,
            imgUrl: '',
            left: 0,
            nodeID: 68,
            nodeName: '条件查询',
            orderID: 1,
            pageUrl: '',
            parentID: 8,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 69,
            imgUrl: '',
            left: 0,
            nodeID: 69,
            nodeName: '范围查询',
            orderID: 2,
            pageUrl: '',
            parentID: 8,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 70,
            imgUrl: '',
            left: 0,
            nodeID: 70,
            nodeName: '沿线查询',
            orderID: 3,
            pageUrl: '',
            parentID: 8,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 75,
            imgUrl: '',
            left: 0,
            nodeID: 75,
            nodeName: '模糊查询',
            orderID: 4,
            pageUrl: '',
            parentID: 8,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 71,
            imgUrl: '',
            left: 0,
            nodeID: 71,
            nodeName: '道路名称',
            orderID: 4,
            pageUrl: '',
            parentID: 8,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 560,
            imgUrl: '',
            left: 0,
            nodeID: 560,
            nodeName: '坐标定位',
            orderID: 9,
            pageUrl: '',
            parentID: 8,
            right: 0,
            top: 0,
          },
        ],
      },
      {
        bottom: 0,
        configUrl: '',
        id: 9,
        imgUrl: '',
        left: 0,
        nodeID: 9,
        nodeName: '编辑',
        orderID: 1,
        pageUrl: '',
        parentID: -1,
        right: 0,
        top: 0,
        children: [],
      },
      {
        bottom: 0,
        configUrl: '',
        id: 10,
        imgUrl: '',
        left: 0,
        nodeID: 10,
        nodeName: '任务',
        orderID: 2,
        pageUrl: '',
        parentID: -1,
        right: 0,
        top: 0,
        children: [
          {
            bottom: 0,
            configUrl: '',
            id: 60,
            imgUrl: '',
            left: 0,
            nodeID: 60,
            nodeName: '项目列表',
            orderID: 0,
            pageUrl: '',
            parentID: 10,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 550,
            imgUrl: '',
            left: 0,
            nodeID: 550,
            nodeName: 'GIS信息审核',
            orderID: 0,
            pageUrl: '',
            parentID: 10,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 645,
            imgUrl: '',
            left: 0,
            nodeID: 645,
            nodeName: '全区导出任务列表',
            orderID: 0,
            pageUrl: '',
            parentID: 10,
            right: 0,
            top: 0,
          },
        ],
      },
      {
        bottom: 0,
        configUrl: '',
        id: 600,
        imgUrl: '',
        left: 0,
        nodeID: 600,
        nodeName: '设施统计',
        orderID: 4,
        pageUrl: '',
        parentID: -1,
        right: 0,
        top: 0,
        children: [
          {
            bottom: 0,
            configUrl: '',
            id: 601,
            imgUrl: '',
            left: 0,
            nodeID: 601,
            nodeName: '条件统计',
            orderID: 0,
            pageUrl: '',
            parentID: 600,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 602,
            imgUrl: '',
            left: 0,
            nodeID: 602,
            nodeName: '汇总统计',
            orderID: 1,
            pageUrl: '',
            parentID: 600,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 603,
            imgUrl: '',
            left: 0,
            nodeID: 603,
            nodeName: '时间统计',
            orderID: 3,
            pageUrl: '',
            parentID: 600,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 605,
            imgUrl: '',
            left: 0,
            nodeID: 605,
            nodeName: '操作日志查询',
            orderID: 0,
            pageUrl: '',
            parentID: 600,
            right: 0,
            top: 0,
          },
        ],
      },
      {
        bottom: 0,
        configUrl: '',
        id: 500,
        imgUrl: '',
        left: 0,
        nodeID: 500,
        nodeName: '工具',
        orderID: 5,
        pageUrl: '',
        parentID: -1,
        right: 0,
        top: 0,
        children: [
          {
            bottom: 0,
            configUrl: '',
            id: 501,
            imgUrl: '',
            left: 0,
            nodeID: 501,
            nodeName: '放大',
            orderID: 0,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 502,
            imgUrl: '',
            left: 0,
            nodeID: 502,
            nodeName: '缩小',
            orderID: 1,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 507,
            imgUrl: '',
            left: 0,
            nodeID: 507,
            nodeName: '清除',
            orderID: 2,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 504,
            imgUrl: '',
            left: 0,
            nodeID: 504,
            nodeName: '拉框放大',
            orderID: 3,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 505,
            imgUrl: '',
            left: 0,
            nodeID: 505,
            nodeName: '拉框缩小',
            orderID: 4,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 506,
            imgUrl: '',
            left: 0,
            nodeID: 506,
            nodeName: '测距',
            orderID: 5,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 503,
            imgUrl: '',
            left: 0,
            nodeID: 503,
            nodeName: '复位',
            orderID: 6,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 508,
            imgUrl: '',
            left: 0,
            nodeID: 508,
            nodeName: '爆管分析',
            orderID: 7,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 509,
            imgUrl: '',
            left: 0,
            nodeID: 509,
            nodeName: '点线表导入',
            orderID: 8,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 510,
            imgUrl: '',
            left: 0,
            nodeID: 510,
            nodeName: '点线表导出',
            orderID: 9,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 511,
            imgUrl: '',
            left: 0,
            nodeID: 511,
            nodeName: 'CAD输出',
            orderID: 10,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 512,
            imgUrl: '',
            left: 0,
            nodeID: 512,
            nodeName: 'SHP输出',
            orderID: 11,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 510,
            imgUrl: '',
            left: 0,
            nodeID: 510,
            nodeName: 'GIS错误上报',
            orderID: 13,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 520,
            imgUrl: '',
            left: 0,
            nodeID: 520,
            nodeName: '我的收藏',
            orderID: 20,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 540,
            imgUrl: '',
            left: 0,
            nodeID: 540,
            nodeName: '范围打印',
            orderID: 0,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 615,
            imgUrl: '',
            left: 0,
            nodeID: 615,
            nodeName: '专题图',
            orderID: 0,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 625,
            imgUrl: '',
            left: 0,
            nodeID: 625,
            nodeName: '专题图/管材专题图',
            orderID: 0,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 626,
            imgUrl: '',
            left: 0,
            nodeID: 626,
            nodeName: '专题图/管径专题图',
            orderID: 0,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 635,
            imgUrl: '',
            left: 0,
            nodeID: 635,
            nodeName: '全区导出',
            orderID: 0,
            pageUrl: '',
            parentID: 500,
            right: 0,
            top: 0,
          },
        ],
      },
      {
        bottom: 0,
        configUrl: '',
        id: 12,
        imgUrl: '',
        left: 0,
        nodeID: 12,
        nodeName: '检查',
        orderID: 6,
        pageUrl: '',
        parentID: -1,
        right: 0,
        top: 0,
        children: [
          {
            bottom: 0,
            configUrl: '',
            id: 41,
            imgUrl: '',
            left: 0,
            nodeID: 41,
            nodeName: '拓扑检查',
            orderID: 1,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 42,
            imgUrl: '',
            left: 0,
            nodeID: 42,
            nodeName: '重叠点检查',
            orderID: 2,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 208,
            imgUrl: '',
            left: 0,
            nodeID: 208,
            nodeName: '重叠线检查',
            orderID: 3,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 49,
            imgUrl: '',
            left: 0,
            nodeID: 49,
            nodeName: '唯一检查',
            orderID: 7,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 50,
            imgUrl: '',
            left: 0,
            nodeID: 50,
            nodeName: '孤立点检查',
            orderID: 8,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 51,
            imgUrl: '',
            left: 0,
            nodeID: 51,
            nodeName: '孤立线检查',
            orderID: 9,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 61,
            imgUrl: '',
            left: 0,
            nodeID: 61,
            nodeName: '连通性检查',
            orderID: 10,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 52,
            imgUrl: '',
            left: 0,
            nodeID: 52,
            nodeName: '相交线检查',
            orderID: 10,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 510,
            imgUrl: '',
            left: 0,
            nodeID: 510,
            nodeName: '连通分量检查',
            orderID: 11,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
          {
            bottom: 0,
            configUrl: '',
            id: 530,
            imgUrl: '',
            left: 0,
            nodeID: 530,
            nodeName: '飞点检查',
            orderID: 20,
            pageUrl: '',
            parentID: 12,
            right: 0,
            top: 0,
          },
        ],
      },
    ],
  };
}

function getUserFuns() {

}

function query(params) {
  console.log(params);
  return {
    displayFieldName: 'GID',
    fieldAliases: {
      GID: 'GID',
      NAME: 'NAME',
      TYPE: 'TYPE',
      CODE: 'CODE',
      ORDERBY: 'ORDERBY',
      SYS: 'SYS',
      RGID: 'RGID',
      GROUPID: 'GROUPID',
    },
    fields: [
      { name: 'GID', type: 'esriFieldTypeOID', alias: 'GID', length: 64 },
      {
        name: 'NAME',
        type: 'esriFieldTypeString',
        alias: 'NAME',
        length: 64,
      },
      { name: 'TYPE', type: 'esriFieldTypeInteger', alias: 'TYPE', length: 64 },
      {
        name: 'CODE',
        type: 'esriFieldTypeString',
        alias: 'CODE',
        length: 64,
      },
      {
        name: 'ORDERBY',
        type: 'esriFieldTypeInteger',
        alias: 'ORDERBY',
        length: 64,
      },
      {
        name: 'SYS',
        type: 'esriFieldTypeString',
        alias: 'SYS',
        length: 64,
      },
      { name: 'RGID', type: 'esriFieldTypeInteger', alias: 'RGID', length: 64 },
      {
        name: 'GROUPID',
        type: 'esriFieldTypeInteger',
        alias: 'GROUPID',
        length: 64,
      },
    ],
    features: [
      {
        attributes: {
          GID: '117',
          NAME: '抢修科室小黑',
          TYPE: '',
          CODE: '103',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '118',
          NAME: '养护科室小黑',
          TYPE: '',
          CODE: '104',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '112',
          NAME: '管理员',
          TYPE: '',
          CODE: 'admin',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '116',
          NAME: '延期退单审核人',
          TYPE: '',
          CODE: 'Auditor',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '113',
          NAME: '业务处理员',
          TYPE: '',
          CODE: 'businessMng',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '111',
          NAME: '组长',
          TYPE: '',
          CODE: 'GroupLeader',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '106',
          NAME: '所长',
          TYPE: '',
          CODE: 'Institute',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '125',
          NAME: '劳务班组',
          TYPE: '',
          CODE: 'Labor_group',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '124',
          NAME: '劳务方管理',
          TYPE: '',
          CODE: 'Labor_management',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '110',
          NAME: '片长',
          TYPE: '',
          CODE: 'Long',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '109',
          NAME: '管理方',
          TYPE: '',
          CODE: 'managementParty',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '107',
          NAME: '管网所科员',
          TYPE: '',
          CODE: 'networkClerk',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '128',
          NAME: 'oms角色测试',
          TYPE: '2',
          CODE: 'oms角色测试',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '108',
          NAME: '接线员',
          TYPE: '',
          CODE: 'operator',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '127',
          NAME: '管网所管理',
          TYPE: '',
          CODE: 'Pipe_management',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '126',
          NAME: '监理',
          TYPE: '',
          CODE: 'Supervisor',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '122',
          NAME: '测试名称',
          TYPE: '',
          CODE: '测试名称',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '115',
          NAME: '养护单位',
          TYPE: '2',
          CODE: '外包',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '119',
          NAME: '巡检单位',
          TYPE: '2',
          CODE: '巡检外包',
          ORDERBY: '1',
          SYS: 'all',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '120',
          NAME: 'ww',
          TYPE: '3',
          CODE: 'ww',
          ORDERBY: '1',
          SYS: 'webgis',
          RGID: '1',
          GROUPID: '2',
        },
      },
      {
        attributes: {
          GID: '121',
          NAME: 'ww123',
          TYPE: '3',
          CODE: 'ww123',
          ORDERBY: '1',
          SYS: 'webgis',
          RGID: '1',
          GROUPID: '2',
        },
      },
    ],
  };
}
