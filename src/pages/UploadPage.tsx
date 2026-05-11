import { useState } from 'react';
import { Upload, FileUp, CheckSquare, Square, Sparkles } from 'lucide-react';
import { extractedTerms } from '@/data/mockData';
import Sidebar from '@/components/Sidebar';

const sidebarItems = [
  { key: 'file', label: '文件上传', icon: <Upload className="w-4 h-4" /> },
  { key: 'ai', label: 'AI解析任务', icon: <Sparkles className="w-4 h-4" /> },
  { key: 'pending-terms', label: '待生成词条', icon: <FileUp className="w-4 h-4" /> },
  { key: 'pending-update', label: '待更新知识', icon: <FileUp className="w-4 h-4" /> },
];

export default function UploadPage() {
  const [activeMenu, setActiveMenu] = useState('ai');
  const [terms, setTerms] = useState(extractedTerms);

  const toggleTerm = (id: string) => {
    setTerms((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  return (
    <div className="flex min-h-full bg-slate-50">
      <Sidebar
        title="上传中心"
        items={sidebarItems}
        activeKey={activeMenu}
        onItemClick={setActiveMenu}
      />

      <main className="flex-1 p-6">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-slate-800">AI解析工作台</h1>
            <p className="text-sm text-slate-500 mt-1">上传专业文档，AI自动拆解生成结构化知识</p>
          </div>

          {/* Upload Area */}
          <div className="bg-white rounded-xl border-2 border-dashed border-slate-300 p-12 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-base text-slate-700 mb-2">
                拖拽文件到此处，或 <span className="text-blue-600 cursor-pointer hover:underline">点击上传</span>
              </p>
              <p className="text-sm text-slate-400">支持 PDF, Word, Markdown, TXT</p>
            </div>
          </div>

          {/* Parse Result Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  解析任务: 2024年信贷政策解读报告.pdf
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  文件大小 2.4MB · 上传时间 2024-05-08 10:15
                </p>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-md font-medium">
                解析完成
              </span>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-800 mb-2">原文摘要</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                本文档主要解读2024年三季度信贷政策调整方向，涉及小微企业贷款额度提升、绿色金融激励机制优化、信贷风险评级标准更新等核心内容。政策适用于全国性商业银行及地方性法人银行机构。
              </p>
            </div>

            {/* Extracted Terms */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-800 mb-3">
                AI提取待生成词条 ({terms.filter((t) => t.checked).length})
              </h4>
              <div className="space-y-2">
                {terms.map((term) => (
                  <label
                    key={term.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <button
                      onClick={() => toggleTerm(term.id)}
                      className="flex items-center justify-center"
                    >
                      {term.checked ? (
                        <CheckSquare className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300 group-hover:text-slate-400" />
                      )}
                    </button>
                    <span className="text-sm text-slate-700">{term.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Auto-fill Preview */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-800 mb-3">属性自动填充预览</h4>
              <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-700">适用对象</span>
                  <span className="text-sm text-slate-600">商业银行、政策性银行</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-700">生效日期</span>
                  <span className="text-sm text-slate-600">2024-07-01</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-700">政策来源</span>
                  <span className="text-sm text-slate-600">中国人民银行、银保监会</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                确认生成词条
              </button>
              <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                重新解析
              </button>
              <button className="px-5 py-2.5 text-slate-500 text-sm hover:text-slate-700 transition-colors">
                放弃
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
