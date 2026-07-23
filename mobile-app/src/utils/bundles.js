import { getEntryTradeDate } from './tradeDates.js';
import { getPlanStatus } from './tradeUtils.js';

export const BUNDLE_SIZE = 20;

export const computeBundles = (entries) => {
  const sortedEntries = [...(entries || [])].sort((left, right) => {
    const leftDate = getEntryTradeDate(left) || new Date(left.created_at);
    const rightDate = getEntryTradeDate(right) || new Date(right.created_at);
    return leftDate - rightDate;
  });

  const completedBundles = [];
  let runningTrades = [];

  sortedEntries.forEach((entry) => {
    const planStatus = getPlanStatus(entry);

    if (planStatus === 'FOLLOWED') {
      runningTrades.push(entry);

      if (runningTrades.length === BUNDLE_SIZE) {
        completedBundles.push({
          trades: runningTrades,
          startDate: getEntryTradeDate(runningTrades[0]) || new Date(runningTrades[0].created_at),
          endDate:
            getEntryTradeDate(runningTrades[BUNDLE_SIZE - 1]) ||
            new Date(runningTrades[BUNDLE_SIZE - 1].created_at),
        });
        runningTrades = [];
      }
    } else {
      runningTrades = [];
    }
  });

  return {
    completedBundles,
    currentBundleTrades: runningTrades,
  };
};
