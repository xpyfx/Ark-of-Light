export enum PageSection {
  HOME = 'HOME',
  NEWS = 'NEWS',
  CREATORS = 'CREATORS',
  AGRI = 'AGRI',
  MAP = 'MAP',
  TRANSPORT = 'TRANSPORT',
  TICKETS = 'TICKETS',
  CONTACT = 'CONTACT'
}

export interface NewsItem {
  id: string;
  date: string;
  category: '官方消息' | '遺失物招領';
  title: string;
  summary: string;
}

export interface Creator {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface TicketType {
  name: string;
  price: number;
  description: string;
  features: string[];
}