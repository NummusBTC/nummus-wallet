/**
 * Constants for Bitcoin price components
 */
import { TimeframePeriod } from '@/src/types/price.types'

// API configuration
export const MIN_FETCH_INTERVAL = 2000 // Minimum time between API calls (ms)
export const AUTO_REFRESH_INTERVAL = 60000 // Auto refresh interval (ms)
export const EARLIEST_BITCOIN_TIMESTAMP = 1367174841 // Bitcoin's earliest data on CoinGecko

// Time periods for price display
export const TIME_PERIODS: TimeframePeriod[] = [
  { label: '1d', days: 1, interval: 'hourly' },
  { label: '1w', days: 7, interval: 'daily' },
  { label: '1m', days: 30, interval: 'daily' },
  { label: '1y', days: 365, interval: 'weekly' },
  { label: 'All', days: 'max', interval: 'monthly' }
] 