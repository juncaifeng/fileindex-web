import { cn } from '@/lib/utils';

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  title: string;
  items: MenuItem[];
  activeKey: string;
  onItemClick?: (key: string) => void;
}

export default function Sidebar({ title, items, activeKey, onItemClick }: SidebarProps) {
  return (
    <aside className="w-60 bg-white border-r border-slate-200 flex-shrink-0">
      <div className="p-4">
        <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3 px-3">
          {title}
        </h3>
        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => onItemClick?.(item.key)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left',
                activeKey === item.key
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
              )}
            >
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
