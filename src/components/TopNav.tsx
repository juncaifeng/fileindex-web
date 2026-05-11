import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Database, Upload, ClipboardCheck, Settings, Bell, User } from 'lucide-react';

const navItems = [
  { key: 'search', label: '知识检索', icon: BookOpen, path: '/' },
  { key: 'asset-model', label: '资产模型', icon: Database, path: '/asset-model' },
  { key: 'upload', label: '上传中心', icon: Upload, path: '/upload' },
  { key: 'approval', label: '审批台', icon: ClipboardCheck, path: '/approval' },
  { key: 'settings', label: '系统设置', icon: Settings, path: '/settings' },
];

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveKey = () => {
    const item = navItems.find((n) => n.path === location.pathname);
    return item?.key || 'search';
  };

  const activeKey = getActiveKey();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Database className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-semibold text-slate-800">知识资产中台</span>
      </div>

      <nav className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <button
              key={item.key}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-slate-500" />
          </div>
          <span className="text-sm text-slate-700">Admin</span>
        </div>
      </div>
    </header>
  );
}
