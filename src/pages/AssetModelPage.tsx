import { useState } from 'react';
import { Search, Plus, Layers, Box, Tag, FileText, Link2, Ruler } from 'lucide-react';
import { domains } from '@/data/mockData';
import StatusTag from '@/components/StatusTag';
import Sidebar from '@/components/Sidebar';

const sidebarItems = [
  { key: 'domain', label: '领域管理', icon: <Layers className="w-4 h-4" /> },
  { key: 'entity', label: '实体类型', icon: <Box className="w-4 h-4" /> },
  { key: 'category', label: '词条分类', icon: <Tag className="w-4 h-4" /> },
  { key: 'template', label: '属性模板', icon: <FileText className="w-4 h-4" /> },
  { key: 'relation', label: '关联关系', icon: <Link2 className="w-4 h-4" /> },
  { key: 'standard', label: '标准口径', icon: <Ruler className="w-4 h-4" /> },
];

export default function AssetModelPage() {
  const [activeMenu, setActiveMenu] = useState('domain');
  const [searchQuery, setSearchQuery] = useState('');

  const enabledCount = domains.filter((d) => d.status === 'enabled').length;
  const pendingCount = domains.filter((d) => d.status === 'pending').length;

  return (
    <div className="flex min-h-full bg-slate-50">
      <Sidebar
        title="模型配置"
        items={sidebarItems}
        activeKey={activeMenu}
        onItemClick={setActiveMenu}
      />

      <main className="flex-1 p-6">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-xl font-semibold text-slate-800">领域管理</h1>
              <p className="text-sm text-slate-500 mt-1">定义知识资产的顶层分类领域</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索领域..."
                  className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                新建领域
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="text-3xl font-bold text-blue-600">{domains.length}</div>
              <div className="text-sm text-slate-500 mt-1">总领域数</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="text-3xl font-bold text-green-500">{enabledCount}</div>
              <div className="text-sm text-slate-500 mt-1">已启用</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="text-3xl font-bold text-amber-500">{pendingCount}</div>
              <div className="text-sm text-slate-500 mt-1">待完善</div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">领域名称</th>
                  <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">领域编码</th>
                  <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">负责人</th>
                  <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">状态</th>
                  <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">最后更新时间</th>
                </tr>
              </thead>
              <tbody>
                {domains.map((domain) => (
                  <tr
                    key={domain.id}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-slate-800">{domain.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{domain.code}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{domain.owner}</td>
                    <td className="px-6 py-4">
                      <StatusTag status={domain.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{domain.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
              &lt;
            </button>
            <button className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
              2
            </button>
            <button className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
              3
            </button>
            <button className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
              &gt;
            </button>
            <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md">1</button>
            <button className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
              2
            </button>
            <button className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
              3
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
