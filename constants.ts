import { NewsItem, Creator, TicketType } from './types';

export const NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    date: '2023.10.24',
    category: '官方消息',
    title: '光影之舟開幕夜：沉浸式體驗全面啟動',
    summary: '歡迎蒞臨光影之舟，今晚將由國際知名藝術家團隊帶來震撼的開幕表演。'
  },
  {
    id: '2',
    date: '2023.10.22',
    category: '官方消息',
    title: '週末市集攤位名單公佈',
    summary: '本週聚集超過50家在地文創與小農品牌，詳細地圖請參閱市集資訊。'
  },
  {
    id: '3',
    date: '2023.10.20',
    category: '遺失物招領',
    title: '拾獲黑色皮夾一只',
    summary: '於A區水上展覽動線拾獲，請失主至服務台核對認領。'
  }
];

export const CREATORS_DATA: Creator[] = [
  {
    id: 'c1',
    name: '林光影',
    role: '視覺總監',
    description: '擅長運用數位光雕技術，將在地故事轉化為流動的視覺詩篇。',
    imageUrl: 'https://picsum.photos/400/500?grayscale'
  },
  {
    id: 'c2',
    name: 'Sarah Chen',
    role: '裝置藝術家',
    description: '以永續材質創作大型戶外裝置，探討人與自然的共生關係。',
    imageUrl: 'https://picsum.photos/401/500?grayscale'
  },
  {
    id: 'c3',
    name: 'Voyage Collective',
    role: '策展團隊',
    description: '致力於打造跨領域的感官體驗，連結土地記憶與未來想像。',
    imageUrl: 'https://picsum.photos/402/500?grayscale'
  }
];

export const TICKET_DATA: TicketType[] = [
  {
    name: '全票',
    price: 450,
    description: '一般民眾適用',
    features: ['全區展覽通行', '光影體驗券 x1', '市集折價券 $50']
  },
  {
    name: '優待票',
    price: 350,
    description: '學生/65歲以上長者',
    features: ['全區展覽通行', '光影體驗券 x1']
  },
  {
    name: 'VIP 通行證',
    price: 1200,
    description: '極致體驗',
    features: ['快速通關', '專屬導覽', '限定紀念品', 'VIP休息室使用權']
  }
];

export const NAV_ITEMS = [
  { id: 'HOME', label: '首頁' },
  { id: 'NEWS', label: '最新消息' },
  { id: 'CREATORS', label: '創作者與IP' },
  { id: 'AGRI', label: '農產推廣' },
  { id: 'MAP', label: '地圖資訊' },
  { id: 'TRANSPORT', label: '交通資訊' },
  { id: 'TICKETS', label: '購票' },
  { id: 'CONTACT', label: '聯絡與FAQ' },
];