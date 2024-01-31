export class CreateProjectDto {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  members?: string[];
}
