import { type CollectionEntry, getCollection } from "astro:content";

export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
	return await getCollection("project", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

export function groupProjectsByCategory(
	projects: CollectionEntry<"project">[],
): Record<string, CollectionEntry<"project">[]> {
	const sorted = [...projects].sort((a, b) => {
		const orderA = a.data.order ?? Infinity;
		const orderB = b.data.order ?? Infinity;
		if (orderA !== orderB) return orderA - orderB;
		return a.data.title.localeCompare(b.data.title);
	});
	return Object.groupBy(sorted, (p) => p.data.category) as Record<
		string,
		CollectionEntry<"project">[]
	>;
}
