export type Triage = 'cosmetic' | 'low' | 'medium' | 'high' | 'critical'

/**
 * triages a bug based on the percentage of customers affeced, and the
 * severity of the impact on any given affected customers.
 * 
 * A chart of how this is calculated:
 * 
 * ```
 *   100% +-------------------------------------------------------+
 *        |                                                       |
 *    90% +--------------+--------------------------+             |
 *        |              |                          |  critical   |
 *        |              |        high              |             |
 *        |              |                          |             |
 *    75% |              +-------------+            +-------------+
 *        |                            |                          |
 *        |                            |                          |
 *  i     |                            |                          |
 *  m     |                            |                          |
 *  p 50% |                            +--------------------------+
 *  a     |                                                       |
 *  c     |                                                       |
 *  t     |                     medium                            |
 *        |                                                       |
 *        |                                                       |
 *        |                                                       |
 *    25% +--------------+                                        |
 *        |              |                                        |
 *        |     low      |                                        |
 *        |              |                                        |
 *    10% +--------------+----------------------------------------+
 *        |                     cosmetic                          |
 *     0% +-------------------------------------------------------+
 *        0%            25%           50%           75%        100%
 *                            customers impacted
 * ```
 */
export const triage = (impact: number, customers: number): Triage => {
  if (impact < 10) return 'cosmetic'
  if (impact < 25 && customers < 25) return 'low'
  if (
    (impact < 90 && customers < 25) ||
    (impact < 75 && customers < 50) ||
    (impact < 50)
  ) return 'medium'
  if (impact < 90 && impact >=50 && customers >= 25 && (
    (impact >= 75 || customers >= 50) &&
    !(customers >= 75 && impact >= 75)
  )) return 'high'
  return 'critical'
}
