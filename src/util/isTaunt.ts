export default function isTaunt(item: string): boolean {
	return item.startsWith('Taunt: ') || item == 'Shred Alert';
}
