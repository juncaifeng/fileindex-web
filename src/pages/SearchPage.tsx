import { useState } from 'react';
import { Search, ChevronDown, CheckSquare, Square } from 'lucide-react';
import { knowledgeItems } from '@/data/mockData';
import StatusTag from '@/components/StatusTag';

const filterDomains = [
  { label: '信贷政策', count: 45 },
  { label: '风险管理', count: 32 },
  { label: '合规制度', count: 28 },
  { label: '普惠金融', count: 23 },
];

const filterTypes = [
  { label: '词条', count: 68 },
  { label: '制度文件', count: 35 },
  { label: '政策解读', count: 18 },
  { label: '研究报告', count: 7 },
];

const filterTime = ['最近一周', '最近一月', '最近一年'];
const hotTags = ['贷款', '风控', '普惠', '绿色金融'];
const topTabs = ['词条', '制度', '政策'];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('小微企业贷款');
  const [activeTab, setActiveTab] = useState('词条');
  const [selectedDomains, setSelectedDomains] = useState<string[]>(['信贷政策']);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['制度文件']);
  const [selectedTime, setSelectedTime] = useState('最近一年');

  const toggleDomain = (label: string) => {
    setSelectedDomains((prev) =>
      prev.includes(label) ? prev.filter((d) => d !== label) : [...prev, label]
    );
  };

  const toggleType = (label: string) => {
    setSelectedTypes((prev) =>
      prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
    );
  };

  return (
    <div className="min-h-full bg-slate-50">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-2xl mx-auto px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索词条..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">共找到 128 条相关知识</p>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto px-6 py-6 gap-6">
        {/* Left Filters */}
        <div className="w-64 flex-shrink-0 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">筛选条件</h3>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-2">所属领域</h4>
            <div className="space-y-2">
              {filterDomains.map((item) => (
                <label key={item.label} className="flex items-center gap-2 cursor-pointer group">
                  <button
                    onClick={() => toggleDomain(item.label)}
                    className="flex items-center justify-center"
                  >
                    {selectedDomains.includes(item.label) ? (
                      <CheckSquare className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-300 group-hover:text-slate-400" />
                    )}
                  </button>
                  <span className="text-sm text-slate-600">{item.label}</span>
                  <span className="text-xs text-slate-400">({item.count})</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-2">知识类型</h4>
            <div className="space-y-2">
              {filterTypes.map((item) => (
                <label key={item.label} className="flex items-center gap-2 cursor-pointer group">
                  <button
                    onClick={() => toggleType(item.label)}
                    className="flex items-center justify-center"
                  >
                    {selectedTypes.includes(item.label) ? (
                      <CheckSquare className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-300 group-hover:text-slate-400" />
                    )}
                  </button>
                  <span className="text-sm text-slate-600">{item.label}</span>
                  <span className="text-xs text-slate-400">({item.count})</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-2">更新时间</h4>
            <div className="space-y-2">
              {filterTime.map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <button onClick={() => setSelectedTime(item)} className="flex items-center justify-center">
                    {selectedTime === item ? (
                      <CheckSquare className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                  <span className="text-sm text-slate-600">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-2">热门标签</h4>
            <div className="flex flex-wrap gap-2">
              {hotTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md hover:bg-slate-200 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Results */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {topTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-800">
              相关度排序
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {knowledgeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-base font-semibold text-blue-600 hover:underline cursor-pointer">
                    {item.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-md">
                    {item.type}
                  </span>
                  {item.status === '待审批' && (
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-xs rounded-md">
                      待审批
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{item.summary}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{item.domain}</span>
                  {item.version && <span>· {item.version}</span>}
                  <span>· {item.updatedAt}</span>
                  <span className="text-blue-600 font-medium">相关度 {item.relevance}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
