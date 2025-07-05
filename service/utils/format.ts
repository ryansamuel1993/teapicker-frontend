export function formatEnum(value: string | undefined): string | undefined {
  return value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : undefined;
}
