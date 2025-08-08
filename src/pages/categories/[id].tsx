import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryDetail } from '../../components/CategoryDetail';
import { Spinner } from '../../components/ui/Spinner';
import { ErrorMessage } from '../../components/ui/ErrorMessage';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/categories/${id}`)
        .then(response => {
          setCategory(response.data);
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
      <CategoryDetail category={category} />
    </div>
  );
};

export default CategoryDetailPage;