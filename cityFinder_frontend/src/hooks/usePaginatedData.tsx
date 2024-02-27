import { useInfiniteQuery } from "react-query";
import { useEffect, useRef } from "react";

export const usePaginatedData = <T,>(
  fetchFunction: (params: any) => any,
  queryKey: any[],
  transformResponse: (page: any) => T[],
  pageSize: number = 5,
) => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) => fetchFunction({ page: pageParam, limit: pageSize }),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.data.current_page + 1;
        const totalPages = Math.ceil(lastPage.data.total / pageSize);
        return nextPage <= totalPages ? nextPage : undefined;
      },
      keepPreviousData: true,
      staleTime: 10000, //пять секунд данные считаются актуальнымм - не перезапрашиваються дл истечения таймера
    },
  );
    console.log("data : ", data)
  const observer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: { isIntersecting: boolean }[]) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    const newObserver = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });
    if (observer.current) newObserver.observe(observer.current);

    return () => {
      if (observer.current) newObserver.unobserve(observer.current);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return {
    data: data?.pages.flatMap(transformResponse) || [],
    isLoading,
    isError,
    error,
    observer,
    isFetchingNextPage,
    isRefetching,
  };
};
