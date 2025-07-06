import { useState, useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import * as gql from '../gql/index.gql';
import { Item, OrderItem } from '../types/order';

export const useOrder = () => {
  const [basket, setBasket] = useState<OrderItem[]>([]);

  const { data } = gql.useGetMenuQuery();
  const [createOrderMutation, { loading: isSubmitting, error }] = useMutation(gql.CreateOrderDocument);

  const menuItems = useMemo<Item[]>(() => {
    return data?.getMenu ?? [];
  }, [data]);

  const removeItem = useCallback((itemId: string) => {
    setBasket((prev) =>
      prev
        .map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const addItem = useCallback((item: OrderItem) => {
    setBasket((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i));
      }

      return [...prev, item];
    });
  }, []);

  const clearBasket = useCallback(() => {
    setBasket([]);
  }, []);

  const total = useMemo(() => {
    return basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [basket]);

  const itemCount = useMemo(() => {
    return basket.reduce((sum, item) => sum + item.quantity, 0);
  }, [basket]);

  const submitOrder = useCallback(
    async (teamId: string, userId: string, notes: string | undefined) => {
      if (basket.length === 0) {
        return;
      }

      const response = await createOrderMutation({
        variables: {
          input: {
            userId,
            teamId,
            orderType: gql.OrderType.External,
            notes: notes ?? '',
            items: basket.map((item) => ({
              itemId: item.id,
              quantity: item.quantity,
            })),
          },
        },
      });

      if (response.data?.createOrder?.data) {
        clearBasket();
      }
    },
    [basket, createOrderMutation, clearBasket],
  );

  return {
    menuItems,
    basket,
    addItem,
    removeItem,
    clearBasket,
    submitOrder,
    total,
    itemCount,
    isSubmitting,
    error,
  };
};
