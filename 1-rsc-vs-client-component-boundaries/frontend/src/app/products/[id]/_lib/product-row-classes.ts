/** Base Tailwind classes shared by server and client product rows. */
export const PRODUCT_ROW_BASE_CLASS =
  "flex items-center gap-3 rounded-3xl border px-3 py-2";

/** Active product row — highlighted border and background. */
export const PRODUCT_ROW_ACTIVE_CLASS = `${PRODUCT_ROW_BASE_CLASS} border-accent/40 bg-accent/5`;

/** Inactive catalog row — neutral border only. */
export const PRODUCT_ROW_INACTIVE_CLASS = `${PRODUCT_ROW_BASE_CLASS} border-default-200`;

/** Product name text style inside a row. */
export const PRODUCT_NAME_CLASS = "text-sm font-semibold text-foreground";

/** Product price text style inside a row. */
export const PRODUCT_PRICE_CLASS = "text-sm text-muted";
