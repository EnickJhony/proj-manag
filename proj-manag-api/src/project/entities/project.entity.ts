export class Project {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  members?: string[];
}
