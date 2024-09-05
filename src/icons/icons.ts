import { Trash2, AlignLeft, Binary, List, Calendar, Clock, SquareCheckBig, GripVertical } from 'lucide';
import { createIcons } from 'lucide';

export const icons = {
	Trash2,
	AlignLeft,
	Binary,
	List,
	Calendar,
	Clock,
	SquareCheckBig,
	GripVertical
};

export function initializeIcons(root: HTMLElement | Document = document) {
	createIcons({
		icons,
		attrs: {
			'stroke-width': 1.5,
			'class': 'lucide-icon'
		},
		nameAttr: 'data-lucide',
	});
}

export function getPropertyTypeIcon(type: string): string {
	const iconMap: { [key: string]: string } = {
		text: 'align-left',
		multitext: 'list',
		number: 'binary',
		checkbox: 'square-check-big',
		date: 'calendar',
		datetime: 'clock'
	};
	return iconMap[type] || 'align-left';
}