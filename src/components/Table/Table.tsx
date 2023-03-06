import React, { ReactElement } from 'react';
import clsx from 'clsx';
import style from './style.module.css';

export type Column = {
  label: string;
  field: string;
  render?: (row: any) => ReactElement;
  className?: string;
};

export type TableProps = {
  columns: Column[];
  data: Record<string, string | number>[];
};

export const Table = ({ columns, data }: TableProps): ReactElement => {
  return (
    <div className="rounded-md overflow-hidden">
      <table className={clsx('w-full hidden sm:table', style.customTable)}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className="text-gray-300" key={index}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column, tdIndex) => (
                <td
                  key={tdIndex}
                  className={clsx(column.className, 'text-white')}>
                  {column.render ? column.render(item) : item[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-gray-700 block sm:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-transparent border-b-gray-600 p-4">
            {columns.map((column, tdIndex) => (
              <div
                key={tdIndex}
                className="flex items-center justify-center py-2">
                {column.label && (
                  <div className="flex-1 text-gray-400">{column.label}</div>
                )}
                <div className="text-white">
                  {column.render ? column.render(item) : item[column.field]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
