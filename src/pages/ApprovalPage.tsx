import { useState } from 'react';
import { Search, ChevronRight, Edit, GitCompare, History, CheckCircle, XCircle, RotateCcw, FileText } from 'lucide-react';
import { approvalHistory, relatedAssets, knowledgeTree } from '@/data/mockData';
import StatusTag from '@/components/StatusTag';

interface TreeNode {
  name: string;
  expanded?: boolean;
  active?: boolean;
  children?: TreeNode[];
}

function TreeItem({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const [expanded, setExpanded] = useState(node.expanded ?? false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-colors ${
          node.active ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
        }`}
        style={{ paddingLeft: `${level * 16 + 12}px` }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren && (
          <ChevronRight
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-90' : ''}`}
          />
        )}
        {!hasChildren && <div className="w-4" />}
        <span className="text-sm">{node.name}</span>
      </div>
      {hasChildren && expanded && (
        <div>
          {node.children!.map((child, idx) => (
            <TreeItem key={idx} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ApprovalPage() {
  const [approvalComment, setApprovalComment] = useState('');

  return (
    <div className="flex min-h-full bg-slate-50">
      {/* Left Sidebar - Knowledge Tree */}
      <aside className="w-64 bg-white border-r border-slate-200 flex-shrink-0">
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="搜索词条..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3 px-3">
            知识目录
          </h3>
          <nav>
            {knowledgeTree.map((node, idx) => (
              <TreeItem key={idx} node={node} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex">
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <span className="hover:text-slate-700 cursor-pointer">首页</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-slate-700 cursor-pointer">信贷政策</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-800 font-medium">小微企业贷款额度政策</span>
          </nav>

          {/* Title Section */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-xl font-semibold text-slate-800">小微企业贷款额度政策</h1>
              <StatusTag status="待审批" />
            </div>
            <p className="text-sm text-slate-500">
              版本 v2.3 · 最后更新 2024-05-08 14:32 · 编辑者 李专员
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors">
              <Edit className="w-4 h-4" />
              编辑
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors">
              <GitCompare className="w-4 h-4" />
              版本对比
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors">
              <History className="w-4 h-4" />
              历史记录
            </button>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Definition */}
            <section>
              <h2 className="text-base font-semibold text-slate-800 mb-3">定义概述</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                小微企业贷款额度政策是指商业银行在向小型企业、微型企业、个体工商户及小微企业主发放经营性贷款时，所遵循的额度核定标准与动态调整机制。该政策旨在引导金融机构加大对普惠金融领域的信贷投放力度。
              </p>
            </section>

            {/* Scope */}
            <section>
              <h2 className="text-base font-semibold text-slate-800 mb-3">适用对象与范围</h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>小型企业：从业人员 ≤ 300人，年营业收入 ≤ 5000万元</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>微型企业：从业人员 ≤ 20人，年营业收入 ≤ 300万元</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>个体工商户：经市场监管部门登记注册的个体经营者</span>
                </li>
              </ul>
            </section>

            {/* Rules Table */}
            <section>
              <h2 className="text-base font-semibold text-slate-800 mb-3">核心规则与标准</h2>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left text-sm font-medium text-slate-700 px-6 py-3">指标项</th>
                      <th className="text-left text-sm font-medium text-slate-700 px-6 py-3">标准值 / 规则说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 text-sm text-slate-700">单户授信上限</td>
                      <td className="px-6 py-3.5 text-sm text-slate-600">小型企业 ≤ 1000万元；微型企业 ≤ 100万元</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 text-sm text-slate-700">贷款期限</td>
                      <td className="px-6 py-3.5 text-sm text-slate-600">流动资金贷款 ≤ 3年；固定资产贷款 ≤ 10年</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 text-sm text-slate-700">利率优惠</td>
                      <td className="px-6 py-3.5 text-sm text-slate-600">LPR基准下浮10-30BP，视企业评级确定</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Documents */}
            <section>
              <h2 className="text-base font-semibold text-slate-800 mb-3">关联政策文件</h2>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
                  <FileText className="w-4 h-4" />
                  《商业银行授信管理办法》2024年修订版
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
                  <FileText className="w-4 h-4" />
                  《普惠金融考核指标》Q3季度指引
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* Right Sidebar - Approval Panel */}
        <aside className="w-80 bg-white border-l border-slate-200 p-6 flex-shrink-0">
          <h3 className="text-base font-semibold text-slate-800 mb-4">审批操作</h3>

          {/* Current Approver */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
              <span className="text-sm text-slate-600">张</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">当前审批人: 张经理</p>
              <p className="text-xs text-slate-500">提交时间: 2024-05-08 10:15</p>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-700 mb-2 block">审批意见</label>
            <textarea
              value={approvalComment}
              onChange={(e) => setApprovalComment(e.target.value)}
              placeholder="请输入审批意见..."
              rows={4}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 mb-6">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors">
              <CheckCircle className="w-4 h-4" />
              通过并发布
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">
              <XCircle className="w-4 h-4" />
              驳回
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors">
              <RotateCcw className="w-4 h-4" />
              打回修正
            </button>
          </div>

          {/* Related Assets */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-slate-800 mb-3">关联资产</h4>
            <div className="space-y-3">
              {relatedAssets.map((asset) => (
                <div key={asset.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-800 hover:text-blue-600 cursor-pointer">
                      {asset.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {asset.type} · {asset.version}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approval History */}
          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-3">审批历史</h4>
            <div className="space-y-4">
              {approvalHistory.map((record, idx) => (
                <div key={record.id} className="relative">
                  {idx < approvalHistory.length - 1 && (
                    <div className="absolute left-[7px] top-6 w-0.5 h-8 bg-slate-200" />
                  )}
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-3.5 h-3.5 rounded-full mt-1 flex-shrink-0 ${
                        record.status === 'completed'
                          ? 'bg-green-500'
                          : 'bg-amber-500'
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-slate-800">{record.action}</p>
                      <p className="text-xs text-slate-500">
                        {record.operator} · {record.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
