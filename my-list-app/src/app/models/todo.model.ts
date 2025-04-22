export type ToDo = {
    id: number;
    title: string;
    status: 'Yet To Start' | 'In Progress' | 'Completed';
};