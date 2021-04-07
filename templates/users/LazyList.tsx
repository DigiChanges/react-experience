import { useRequest } from 'ahooks';
import React, { useRef } from 'react';

interface Item {
  id: number;
  title: string;
}

interface Result {
  total: number;
  list: Item[];
}

//DUMMYDATA
const dataSource = [
  {
    id: 1,
    title: 'contenido 1'
  },
  {
    id: 2,
    title: 'contenido 2'
  },
  {
    id: 3,
    title: 'contenido 3'
  },
  {
    id: 4,
    title: 'contenido 4'
  },
  {
    id: 5,
    title: 'contenido 5'
  },
  {
    id: 6,
    title: 'contenido 6'
  },
  {
    id: 7,
    title: 'contenido 7'
  },
  {
    id: 8,
    title: 'contenido 8'
  },
  {
    id: 9,
    title: 'contenido 9'
  },
  {
    id: 10,
    title: 'contenido 10'
  },
  {
    id: 11,
    title: 'contenido 11'
  },
  {
    id: 12,
    title: 'contenido 12'
  },
  {
    id: 13,
    title: 'contenido 13'
  },
  {
    id: 14,
    title: 'contenido 14'
  },
  {
    id: 15,
    title: 'contenido 15'
  },
  {
    id: 16,
    title: 'contenido 16'
  },
  {
    id: 17,
    title: 'contenido 17'
  },
  {
    id: 18,
    title: 'contenido 18'
  },
  {
    id: 19,
    title: 'contenido 19'
  },
  {
    id: 20,
    title: 'contenido 20'
  },
  {
    id: 21,
    title: 'contenido 21'
  },
  {
    id: 22,
    title: 'contenido 22'
  },
  {
    id: 23,
    title: 'contenido 23'
  },
  {
    id: 24,
    title: 'contenido 24'
  },
  {
    id: 25,
    title: 'contenido 25'
  },
  {
    id: 26,
    title: 'contenido 26'
  },
  {
    id: 27,
    title: 'contenido 27'
  },
  {
    id: 28,
    title: 'contenido 28'
  },
  {
    id: 29,
    title: 'contenido 29'
  },
  {
    id: 30,
    title: 'contenido 30'
  },
  {
    id: 31,
    title: 'contenido 31'
  },
  {
    id: 32,
    title: 'contenido 32'
  },
  {
    id: 33,
    title: 'contenido 33'
  },
  {
    id: 34,
    title: 'contenido 34'
  },
  {
    id: 35,
    title: 'contenido 35'
  },
  {
    id: 36,
    title: 'contenido 36'
  },
];

//copypaste rancio 💀

const asyncFn = ({ pageSize, offset }: any): Promise<Result> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: dataSource.length,
        list: dataSource.slice(offset, offset + pageSize),
      });
    }, 1000);
  });

export default () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, loading, loadingMore, reload, loadMore, noMore } = useRequest(
    (d: Result | undefined) =>
      asyncFn({
        offset: d?.list?.length || 0,
        pageSize: 6,
      }),
    {
      loadMore: true,
      ref: containerRef,
      isNoMore: (d) => (d ? d.list.length >= d.total : false),
    },
  );

  const { list = [] } = data || {};

  return (
    <div ref={containerRef} className="text-white overflow-y-auto h-56">
      <button type="button" onClick={reload} disabled={loading}>
        {loading ? 'loading' : 'Reload'}
      </button>

      <ul>
        {list.map((item, i) => (
          <li key={i} style={{ height: 50, borderBottom: '1px', lineHeight: '50px' }}>{item.title}</li>
        ))}
      </ul>

      <div>
        {!noMore && (
          <button type="button" onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? 'Loading more...' : 'Click to load more'}
          </button>
        )}

        {noMore && <span>No more data</span>}

        <span style={{ float: 'right', fontSize: 12 }}>total: {data?.total}</span>
      </div>
    </div>
  );
};
