import type { GamificationState } from '@/types/gamification';

const STORAGE_KEY = 'magic-internet-math-progress';
const CURRENT_VERSION = 2;

/**
 * Load gamification state from localStorage
 */
export function loadState(): GamificationState | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const parsed = JSON.parse(saved) as GamificationState;

    // Version migration if needed
    if (parsed.version !== CURRENT_VERSION) {
      console.log(`Migrating state from v${parsed.version} to v${CURRENT_VERSION}`);
      // Add migration logic here if needed
    }

    return parsed;
  } catch (error) {
    console.error('Failed to load gamification state:', error);
    return null;
  }
}

/**
 * Save gamification state to localStorage
 */
export function saveState(state: GamificationState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save gamification state:', error);
  }
}

/**
 * Clear gamification state from localStorage
 */
export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear gamification state:', error);
  }
}
