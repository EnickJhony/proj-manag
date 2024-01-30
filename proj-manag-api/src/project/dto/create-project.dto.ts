export class CreateProjectDto {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  members?: string[];
}
