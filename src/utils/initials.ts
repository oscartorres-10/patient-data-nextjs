export default function initials(string: string): string {
  if (!string) return ''

  const words = string.trim().split(' ')
  const firstTwo = words.slice(0, 2)

  return firstTwo
    .map(word => word.charAt(0).toUpperCase())
    .join('')
}
