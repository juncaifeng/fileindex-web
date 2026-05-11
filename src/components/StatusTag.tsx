interface StatusTagProps {
  status: 'enabled' | 'pending' | 'completed' | '待审批' | '已发布' | '解析完成' | '待完善' | '已启用';
}

const statusMap: Record<string, { text: string; className: string }> = {
  enabled: { text: '已启用', className: 'bg-green-50 text-green-600' },
  pending: { text: '待完善', className: 'bg-amber-50 text-amber-600' },
  completed: { text: '解析完成', className: 'bg-green-50 text-green-600' },
  待审批: { text: '待审批', className: 'bg-amber-50 text-amber-600' },
  已发布: { text: '已发布', className: 'bg-green-50 text-green-600' },
  解析完成: { text: '解析完成', className: 'bg-green-50 text-green-600' },
  待完善: { text: '待完善', className: 'bg-amber-50 text-amber-600' },
  已启用: { text: '已启用', className: 'bg-green-50 text-green-600' },
};

export default function StatusTag({ status }: StatusTagProps) {
  const config = statusMap[status] || { text: status, className: 'bg-gray-50 text-gray-600' };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-sm font-medium ${config.className}`}>
      {config.text}
    </span>
  );
}
