import { useEffect, useState } from "react";
import type { User } from "../model/user.model";
import { fetchUserPagination } from "../api/user.api";
import Pagination from "../components/Pagination";
import UserTable from "../components/UserTable";

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        setIsLoading(true);
        const result = await fetchUserPagination(
          page,
          limit,
          controller.signal,
        );
        setUsers(result.users);
        setTotal(result.total);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();

    return () => {
      controller.abort();
    };
  }, [page, limit]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }
  return (
    <div>
      <h2>User List</h2>
      <Pagination
        page={page}
        limit={limit}
        total={total}
        loading={loading}
        onPrev={() => setPage((p) => p - 1)}
        onNext={() => setPage((p) => p + 1)}
      />

      <UserTable users={users} />
    </div>
  );
};

export default UserPage;
