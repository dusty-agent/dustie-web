const DEFAULT_DATA_BASE_URL = "/data";

const configuredBaseUrl =
    import.meta.env.VITE_DATA_BASE_URL?.trim();

export const DATA_BASE_URL = (
    configuredBaseUrl || DEFAULT_DATA_BASE_URL
).replace(/\/+$/, "");