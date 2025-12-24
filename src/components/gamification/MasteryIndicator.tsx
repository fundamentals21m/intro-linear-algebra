import type { MasteryLevel } from '@/types/gamification';
import { getMasteryInfo } from '@/lib/gamification/masteryCalculator';

interface MasteryIndicatorProps {
  level: MasteryLevel;
  showLabel?: boolean;
}

export function MasteryIndicator({ level, showLabel = false }: MasteryIndicatorProps) {
  const { label, color, symbol } = getMasteryInfo(level);

  return (
    <div className={`flex items-center gap-1.5 ${color}`}>
      <span className="text-sm">{symbol}</span>
      {showLabel && <span className="text-xs">{label}</span>}
    </div>
  );
}
