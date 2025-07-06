import { Button, Card } from 'flowbite-react';
import { HiMicrophone } from 'react-icons/hi';
import Modal from '@/components/Modal';
import { useIsMobileBreakpoint } from '@/service/hooks/useIsMobileBreakpoint';
import { OrderItem } from '@/service/types/order';

type Item = {
  id: string;
  name: string;
  price: number;
};

type OrderModalProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  items: Item[];
  addItem: (item: OrderItem) => void;
  removeItem: (itemId: string) => void;
  onSubmit: () => void;
  onRecord: (record: boolean) => void;
  clearBasket: () => void;
  total: number;
  itemCount: number;
};

export const OrderModal = ({
  isOpen,
  setIsOpen,
  items,
  addItem,
  removeItem,
  onSubmit,
  onRecord,
  total,
  itemCount,
}: OrderModalProps) => {
  const isMobile = useIsMobileBreakpoint();

  const handleSubmit = () => {
    onSubmit();
    setIsOpen(false);
  };

  return (
    <Modal
      withCloseButton
      fullHeight={isMobile}
      contentClassName="md:h-[90%]"
      noBodyPadding
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Create Order"
      bodyClassName="overflow-y-auto slim-scrollbar"
      showBackButton={false}
      actions={
        <div className="flex flex-row items-end gap-2 ml-auto">
          <Button className="flex items-center gap-2 border" onClick={() => onRecord(true)}>
            <HiMicrophone className="text-lg" />
            Record note
          </Button>
          <Button disabled={itemCount === 0} className="border" onClick={handleSubmit}>
            Submit Order ({itemCount} item{itemCount > 1 ? 's' : ''})
          </Button>
        </div>
      }
      size="xl"
    >
      {items.length === 0 && <p className="text-sm text-center text-gray-400">No items available.</p>}

      {items.length > 0 && (
        <>
          <div className="flex flex-col flex-1 gap-4 pr-1">
            {items.map((item) => (
              <Card key={item.id} className="flex justify-end w-full md:h-26 ">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-md">{item.name}</h5>
                    <p className="text-sm text-gray-500">£{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Button className="border" size="xs" onClick={() => addItem({ ...item, quantity: 1 })}>
                      Add
                    </Button>
                    <Button className="border" size="xs" onClick={() => removeItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {itemCount > 0 && (
            <Card className="justify-center h-16 mt-4 text-center border-t shadow-none">
              <p className="text-sm font-medium text-white">Total: £{total.toFixed(2)}</p>
            </Card>
          )}
        </>
      )}
    </Modal>
  );
};
