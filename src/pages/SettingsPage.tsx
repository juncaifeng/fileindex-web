import { useState } from 'react';
import { Settings, Users, ClipboardList, RefreshCw, Plug, ScrollText, Database } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

const sidebarItems = [
  { key: 'general', label: '通用设置', icon: <Settings className="w-4 h-4" /> },
  { key: 'users', label: '用户权限', icon: <Users className="w-4 h-4" /> },
  { key: 'approval-flow', label: '审批流程配置', icon: <ClipboardList className="w-4 h-4" /> },
  { key: 'sync', label: '知识模型同步', icon: <RefreshCw className="w-4 h-4" /> },
  { key: 'api', label: 'API接入', icon: <Plug className="w-4 h-4" /> },
  { key: 'logs', label: '日志审计', icon: <ScrollText className="w-4 h-4" /> },
];

interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
}

function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <button
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-blue-600' : 'bg-slate-200'
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [activeMenu, setActiveMenu] = useState('general');
  const [siteName, setSiteName] = useState('知识资产中台');
  const [notifyUpdate, setNotifyUpdate] = useState(true);
  const [notifyStatus, setNotifyStatus] = useState(true);
  const [notifyNew, setNotifyNew] = useState(false);

  return (
    <div className="flex min-h-full bg-slate-50">
      <Sidebar
        title="设置菜单"
        items={sidebarItems}
        activeKey={activeMenu}
        onItemClick={setActiveMenu}
      />

      <main className="flex-1 p-6">
        <div className="max-w-3xl">
          <h1 className="text-xl font-semibold text-slate-800 mb-8">通用设置</h1>

          {/* Site Info */}
          <section className="mb-8">
            <h2 className="text-base font-semibold text-slate-800 mb-4">站点信息</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-600 w-20">站点名称</label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="flex-1 max-w-md px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-600 w-20">站点Logo</label>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <button className="text-sm text-blue-600 hover:underline">更换</button>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section className="mb-8">
            <h2 className="text-base font-semibold text-slate-800 mb-4">知识更新通知</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">词条更新时通知相关审批人</span>
                <Toggle enabled={notifyUpdate} onChange={() => setNotifyUpdate(!notifyUpdate)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">审批状态变更时通知提交人</span>
                <Toggle enabled={notifyStatus} onChange={() => setNotifyStatus(!notifyStatus)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">新词条发布时通知订阅用户</span>
                <Toggle enabled={notifyNew} onChange={() => setNotifyNew(!notifyNew)} />
              </div>
            </div>
          </section>

          {/* Approval Flow */}
          <section className="mb-8">
            <h2 className="text-base font-semibold text-slate-800 mb-4">默认审批流配置</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-600 w-20">审批节点</label>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="px-3 py-1.5 bg-slate-100 rounded-md">初审</span>
                  <span className="text-slate-400">→</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-md">复审</span>
                  <span className="text-slate-400">→</span>
                  <span className="px-3 py-1.5 bg-slate-100 rounded-md">终审</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-600 w-20">自动超时</label>
                <span className="text-sm text-slate-700">72 小时</span>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-base font-semibold text-slate-800 mb-4">数据保留策略</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-600 w-20">历史版本</label>
                <span className="text-sm text-slate-700">保留最近 10 个版本</span>
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-600 w-20">回收站</label>
                <span className="text-sm text-slate-700">30 天后自动清理</span>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
            <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              保存设置
            </button>
            <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              重置
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
