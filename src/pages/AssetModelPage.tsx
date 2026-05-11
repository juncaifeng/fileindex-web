import { useState } from 'react';
import { Search, Plus, Layers, Box, Tag, FileText, Link2, Ruler } from 'lucide-react';
import { domains, entityTypes, categories, templates, relations, standards } from '@/data/mockData';
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

const pageConfig: Record<string, { title: string; desc: string; searchPlaceholder: string; btnText: string }> = {
  domain: { title: '领域管理', desc: '定义知识资产的顶层分类领域', searchPlaceholder: '搜索领域...', btnText: '新建领域' },
  entity: { title: '实体类型', desc: '定义知识资产中的实体类型', searchPlaceholder: '搜索实体类型...', btnText: '新建实体类型' },
  category: { title: '词条分类', desc: '管理知识词条的分类体系', searchPlaceholder: '搜索分类...', btnText: '新建分类' },
  template: { title: '属性模板', desc: '定义知识资产的属性模板', searchPlaceholder: '搜索模板...', btnText: '新建模板' },
  relation: { title: '关联关系', desc: '定义知识资产间的关联关系', searchPlaceholder: '搜索关系...', btnText: '新建关系' },
  standard: { title: '标准口径', desc: '管理知识资产的标准口径', searchPlaceholder: '搜索口径...', btnText: '新建口径' },
};

function StatCards({ activeMenu }: { activeMenu: string }) {
  if (activeMenu === 'domain') {
    const enabledCount = domains.filter((d) => d.status === 'enabled').length;
    const pendingCount = domains.filter((d) => d.status === 'pending').length;
    return (
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
    );
  }
  if (activeMenu === 'entity') {
    const enabledCount = entityTypes.filter((d) => d.status === 'enabled').length;
    const pendingCount = entityTypes.filter((d) => d.status === 'pending').length;
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-3xl font-bold text-blue-600">{entityTypes.length}</div>
          <div className="text-sm text-slate-500 mt-1">总实体类型</div>
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
    );
  }
  if (activeMenu === 'category') {
    const enabledCount = categories.filter((d) => d.status === 'enabled').length;
    const pendingCount = categories.filter((d) => d.status === 'pending').length;
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-3xl font-bold text-blue-600">{categories.length}</div>
          <div className="text-sm text-slate-500 mt-1">总分类数</div>
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
    );
  }
  if (activeMenu === 'template') {
    const enabledCount = templates.filter((d) => d.status === 'enabled').length;
    const pendingCount = templates.filter((d) => d.status === 'pending').length;
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-3xl font-bold text-blue-600">{templates.length}</div>
          <div className="text-sm text-slate-500 mt-1">总模板数</div>
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
    );
  }
  if (activeMenu === 'relation') {
    const enabledCount = relations.filter((d) => d.status === 'enabled').length;
    const pendingCount = relations.filter((d) => d.status === 'pending').length;
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-3xl font-bold text-blue-600">{relations.length}</div>
          <div className="text-sm text-slate-500 mt-1">总关系数</div>
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
    );
  }
  if (activeMenu === 'standard') {
    const enabledCount = standards.filter((d) => d.status === 'enabled').length;
    const pendingCount = standards.filter((d) => d.status === 'pending').length;
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="text-3xl font-bold text-blue-600">{standards.length}</div>
          <div className="text-sm text-slate-500 mt-1">总口径数</div>
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
    );
  }
  return null;
}

function DataTable({ activeMenu }: { activeMenu: string }) {
  if (activeMenu === 'domain') {
    return (
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
          {domains.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm text-slate-800">{item.name}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.code}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.owner}</td>
              <td className="px-6 py-4"><StatusTag status={item.status} /></td>
              <td className="px-6 py-4 text-sm text-slate-500">{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (activeMenu === 'entity') {
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">实体类型名称</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">类型编码</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">所属领域</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">属性数量</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">状态</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">最后更新时间</th>
          </tr>
        </thead>
        <tbody>
          {entityTypes.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm text-slate-800">{item.name}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.code}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.domain}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.attrCount}</td>
              <td className="px-6 py-4"><StatusTag status={item.status} /></td>
              <td className="px-6 py-4 text-sm text-slate-500">{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (activeMenu === 'category') {
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">分类名称</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">分类编码</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">所属领域</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">词条数量</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">状态</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">最后更新时间</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm text-slate-800">{item.name}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.code}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.domain}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.termCount}</td>
              <td className="px-6 py-4"><StatusTag status={item.status} /></td>
              <td className="px-6 py-4 text-sm text-slate-500">{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (activeMenu === 'template') {
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">模板名称</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">模板编码</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">属性数量</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">使用次数</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">状态</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">最后更新时间</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm text-slate-800">{item.name}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.code}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.attrCount}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.usageCount}</td>
              <td className="px-6 py-4"><StatusTag status={item.status} /></td>
              <td className="px-6 py-4 text-sm text-slate-500">{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (activeMenu === 'relation') {
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">关系名称</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">关系编码</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">源类型</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">目标类型</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">使用次数</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">状态</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">最后更新时间</th>
          </tr>
        </thead>
        <tbody>
          {relations.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm text-slate-800">{item.name}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.code}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.sourceType}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.targetType}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.usageCount}</td>
              <td className="px-6 py-4"><StatusTag status={item.status} /></td>
              <td className="px-6 py-4 text-sm text-slate-500">{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  if (activeMenu === 'standard') {
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">口径名称</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">口径编码</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">分类</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">版本</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">状态</th>
            <th className="text-left text-sm font-medium text-slate-700 px-6 py-3.5">最后更新时间</th>
          </tr>
        </thead>
        <tbody>
          {standards.map((item) => (
            <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm text-slate-800">{item.name}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.code}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.category}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{item.version}</td>
              <td className="px-6 py-4"><StatusTag status={item.status} /></td>
              <td className="px-6 py-4 text-sm text-slate-500">{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return null;
}

export default function AssetModelPage() {
  const [activeMenu, setActiveMenu] = useState('domain');
  const [searchQuery, setSearchQuery] = useState('');

  const config = pageConfig[activeMenu];

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
              <h1 className="text-xl font-semibold text-slate-800">{config.title}</h1>
              <p className="text-sm text-slate-500 mt-1">{config.desc}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={config.searchPlaceholder}
                  className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                {config.btnText}
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <StatCards activeMenu={activeMenu} />

          {/* Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <DataTable activeMenu={activeMenu} />
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
