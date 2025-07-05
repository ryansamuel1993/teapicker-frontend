export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
export type Item = {
  id: string;
  isAvailable: boolean;
  name: string;
  price: number;
};

export type OrderItemInput = {
  itemId: string;
  quantity: number;
};

export type CreateOrderInput = {
  orderType: 'INTERNAL' | 'EXTERNAL';
  notes?: string;
};
