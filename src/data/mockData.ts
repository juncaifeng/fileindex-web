export const domains = [
  { id: '1', name: '信贷政策', code: 'CREDIT_POLICY', owner: '张经理', status: 'enabled' as const, updatedAt: '2024-05-08 14:32' },
  { id: '2', name: '风险管理', code: 'RISK_MGMT', owner: '李主管', status: 'enabled' as const, updatedAt: '2024-05-07 09:15' },
  { id: '3', name: '合规制度', code: 'COMPLIANCE', owner: '王专员', status: 'pending' as const, updatedAt: '2024-05-06 16:45' },
  { id: '4', name: '普惠金融', code: 'INCLUSIVE_FIN', owner: '赵经理', status: 'enabled' as const, updatedAt: '2024-05-05 11:20' },
];

export const knowledgeItems = [
  {
    id: '1',
    title: '小微企业贷款额度政策',
    type: '词条' as const,
    status: '待审批' as const,
    domain: '信贷政策',
    version: 'v2.3',
    updatedAt: '2024-05-08',
    relevance: 98,
    summary: '小微企业贷款额度政策是指商业银行在向小型企业、微型企业发放经营性贷款时，所遵循的额度核定标准与动态调整机制...',
  },
  {
    id: '2',
    title: '商业银行授信管理办法',
    type: '制度文件' as const,
    status: '已发布' as const,
    domain: '合规制度',
    version: 'v1.8',
    updatedAt: '2024-04-20',
    relevance: 92,
    summary: '本办法规范商业银行授信业务的准入条件、审批流程、额度管理及风险监控要求。适用于全国性商业银行及地方性法人银行机构...',
  },
  {
    id: '3',
    title: '2024年信贷政策解读报告',
    type: '政策解读' as const,
    status: '已发布' as const,
    domain: '信贷政策',
    version: '',
    updatedAt: '2024-05-01',
    relevance: 89,
    summary: '本文档主要解读2024年三季度信贷政策调整方向，涉及小微企业贷款额度提升、绿色金融激励机制优化等核心内容...',
  },
  {
    id: '4',
    title: '普惠金融考核指标 Q3指引',
    type: '考核指标' as const,
    status: '已发布' as const,
    domain: '普惠金融',
    version: 'v1.2',
    updatedAt: '2024-04-15',
    relevance: 85,
    summary: 'Q3季度普惠金融考核指标体系，包括小微企业贷款增速、普惠型小微企业贷款户数、普惠金融服务覆盖率等核心考核维度...',
  },
];

export const approvalHistory = [
  { id: '1', action: '提交审批', operator: '李专员', time: '2024-05-08 10:15', status: 'completed' as const },
  { id: '2', action: '初审通过', operator: '王主管', time: '2024-05-08 11:30', status: 'completed' as const },
  { id: '3', action: '待最终审批', operator: '张经理', time: '待处理', status: 'pending' as const },
];

export const relatedAssets = [
  { id: '1', title: '商业银行授信管理办法', type: '制度文件', version: 'v1.8' },
  { id: '2', title: '普惠金融考核指标', type: '考核指标', version: 'Q3' },
  { id: '3', title: '政策性担保业务范围', type: '词条', version: 'v1.2' },
];

export const extractedTerms = [
  { id: '1', name: '小微企业贷款额度政策', checked: true },
  { id: '2', name: '绿色金融激励机制', checked: true },
  { id: '3', name: '信贷风险评级标准', checked: true },
  { id: '4', name: '普惠金融考核指标', checked: true },
  { id: '5', name: '政策性担保业务范围', checked: false },
];

export const knowledgeTree = [
  {
    name: '信贷政策',
    expanded: true,
    children: [
      { name: '个人信贷' },
      {
        name: '企业信贷',
        expanded: true,
        children: [
          { name: '小微企业贷款额度政策', active: true },
          { name: '绿色金融激励机制' },
        ],
      },
    ],
  },
  { name: '风险管理' },
  { name: '合规制度' },
];
