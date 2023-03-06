export enum RoomStatus {
  Cleaned,
  Cleaning,
  NotCleaned,
  ShouldClean
}

export type TRoom = {
  room_number: string;
  category: string;
  description: string;
  image: string;
  status: RoomStatus;
};

export const StatusLabel = {
  [RoomStatus.Cleaned]: 'Cleaned',
  [RoomStatus.Cleaning]: 'In Cleaning',
  [RoomStatus.NotCleaned]: 'Not Cleaned',
  [RoomStatus.ShouldClean]: 'Scheduled'
};
