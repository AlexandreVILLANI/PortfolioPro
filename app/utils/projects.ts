export async function searchProject(pathId: string): Promise<ProjectsCollectionItem | null> {
    return await queryCollection("projects")
        .where("path_id", "=", pathId)
        .where("draft", "=", false)
        .first()
        .then(p => p as ProjectsCollectionItem);
}

export async function getProjects(): Promise<ProjectsCollectionItem[]> {
    return await queryCollection("projects")
        .where("draft", "=", false)
        .all()
        .then(projects => projects.map(p => p as ProjectsCollectionItem));
}

export function prepareProjectPath(project: ProjectsCollectionItem): string {
    return `/projects/${project.path_id}`;
}

export function prepareProjectLinks(project: ProjectsCollectionItem): { [key: string]: string } {
    return {};
}

export interface ProjectsCollectionItem {
    title: string;
    path_id: string;
    date: string | null;
    image: string;
    description: string;
    category: ProjectCategory,
    technologies: string[],
    team: string[],
    project_categories: string[],
    illustrations: string[],
}


//
//  CATEGORIES
//

export const categories = {
    "all": "Tous",
    "university": "Projets universitaires",
    "personal": "Projets personnels",
    "other": "Autre"
};

export type ProjectCategory = "all" | "university" | "personnal" | "opensource";