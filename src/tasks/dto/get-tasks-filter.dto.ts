import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDTO {
  status?: TaskStatus;
  search?: string;
}
