
import { shimmer_infinite } from '@/ui/animations';

export function VitalCardSkeleton() {
  return (
    <div className={`${shimmer_infinite} relative w-full overflow-hidden md:col-span-4 bg-gray-100 rounded-xl`}>
      <div className="p-4">

        <div className="h-8 mb-4 bg-gray-200 rounded-md w-36" />
        <div className="w-56 h-8 bg-gray-200 rounded-md" />
      </div>
      <div className="p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
      </div>
      <div className="flex items-center pt-6 pb-2">
        <div className="w-5 h-5 bg-gray-200 rounded-full" />
        <div className="w-20 h-4 ml-2 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer_infinite} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="w-5 h-5 bg-gray-200 rounded-md" />
        <div className="w-16 h-6 ml-2 text-sm font-medium bg-gray-200 rounded-md" />
      </div>
      <div className="flex items-center justify-center px-4 py-8 truncate bg-white rounded-xl">
        <div className="w-20 bg-gray-200 rounded-md h-7" />
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer_infinite} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="grid gap-6 mt-6 md:grid-cols-3 lg:grid-cols-3">
        <VitalCardSkeleton />
        <VitalCardSkeleton />
        <VitalCardSkeleton />
        <VitalCardSkeleton />
        <VitalCardSkeleton />
        <VitalCardSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* 프로젝트 이름 */}
      <td className="px-3 py-3 whitespace-nowrap">
        <div className="w-32 h-6 bg-gray-100 rounded"></div>
      </td>
      {/* 웹 주소 */}
      <td className="px-3 py-3 whitespace-nowrap">
        <div className="w-16 h-6 bg-gray-100 rounded"></div>
      </td>
      {/* Actions */}
      <td className="py-3 pl-6 pr-3 whitespace-nowrap">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export function ProjectMobileSkeleton() {
  return (
    <div className="w-full p-4 mb-2 bg-white rounded-md">
      <div className="flex items-center justify-between pb-8 border-b border-gray-100">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2 bg-gray-100 rounded-full"></div>
          <div className="w-16 h-6 bg-gray-100 rounded"></div>
        </div>
        <div className="w-16 h-6 bg-gray-100 rounded"></div>
      </div>
      <div className="flex items-center justify-between w-full pt-4">
        <div>
          <div className="w-16 h-6 bg-gray-100 rounded"></div>
          <div className="w-24 h-6 mt-2 bg-gray-100 rounded"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="w-10 h-10 bg-gray-100 rounded"></div>
          <div className="w-10 h-10 bg-gray-100 rounded"></div>
          <div className="w-10 h-10 bg-gray-100 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectTableSkeleton() {
  return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 rounded-lg bg-gray-50 md:pt-0">
          <div className="md:hidden">
            <ProjectMobileSkeleton />
            <ProjectMobileSkeleton />
            <ProjectMobileSkeleton />
            <ProjectMobileSkeleton />
            <ProjectMobileSkeleton />
            <ProjectMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  프로젝트 이름
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  웹 주소
                </th>
                <th
                  scope="col"
                  className="relative pt-2 pb-4 pl-3 pr-6 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
