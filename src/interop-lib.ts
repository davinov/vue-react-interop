export const INTEROP_LIBS = ['local', 'vuereact-combined'] as const;

export const DEFAULT_INTEROP_LIB = INTEROP_LIBS[0];

export function changeInteropLib(newInteropLib: (typeof INTEROP_LIBS)[number]) {
  localStorage.interopLib = newInteropLib;
  window.location.reload();
}

export const interopLib: (typeof INTEROP_LIBS)[number] =
  localStorage.interopLib ?? DEFAULT_INTEROP_LIB;

export const useVRC: boolean = localStorage.interopLib === 'vuereact-combined';
