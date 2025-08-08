import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { OrderDetail } from '../../components/OrderDetail';
import { Spinner } from '../../components/ui/Spinner';
import { ErrorMessage } from '../../components/ui/ErrorMessage';

const OrderPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/orders/${id}`)
        .then(response => {
          setOrder(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-4">
      <OrderDetail order={order} />
    </div>
  );
};

export default OrderPage;