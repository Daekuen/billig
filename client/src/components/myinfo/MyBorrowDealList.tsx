import { useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import api from '../../api/customAxios';
// type
import { Item } from './MyLendPostList';
// components
import BorrowItemCard from './BorrowItemCard';
import { Pagination } from 'components/Pagination';
import Loading from '../Loading';

export default function MyBorrowDealList() {
  const [page, setPage] = useState(1);
  // * useQuery
  const {
    isLoading,
    isError,
    data: borrowDealList,
  } = useQuery(
    [`borrowDealList/${page}`, `${localStorage.getItem('userId')}`],
    async () => {
      return api.get(
        `/product/page?borrower=${localStorage.getItem(
          'userId',
        )}&per=8&page=${page}&stateOfTransaction=1,2`,
      );
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000 * 5,
    },
  );
  // * useMutation
  if (isLoading) return <Loading />;
  return (
    <div className="w-4/5 p-12">
      {borrowDealList?.data.docs.length > 0 ? (
        borrowDealList?.data.docs.map((item: Item) => (
          <BorrowItemCard key={item._id} item={item} />
        ))
      ) : (
        <div className="flex items-center justify-center h-1/2 text-xl font-bold">
          <p>게시물이 존재하지 않습니다.</p>
        </div>
      )}
      {borrowDealList?.data.docs.length > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={borrowDealList?.data.totalPages}
          hasNextPage={borrowDealList?.data.hasNextPage}
          hasPrevPage={borrowDealList?.data.hasPrevPage}
        />
      )}
    </div>
  );
}
