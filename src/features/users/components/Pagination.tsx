interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  loading: boolean;
  onPrev: () => void;
  onNext: () => void;
}
const Pagination = ({
  page,
  limit,
  total,
  loading,
  onPrev,
  onNext,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <div>
      <button onClick={onPrev} disabled={page <= 1 || loading}>
        Prev
      </button>
      <span>
        {page} of {totalPages}
      </span>
      <button onClick={onNext} disabled={page >= totalPages || loading}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
