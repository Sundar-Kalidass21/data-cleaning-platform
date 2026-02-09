// import { BackdropLoader } from "../shared/components/ui/BackdropLoader"
// import { PageLoader } from "../shared/components/ui/PageLoader"

import { FilesTable } from "../shared/components/ui/FilesTable";

// export default function DashboardPage() {
//   const loading = true

//   if (loading) {
//     return <BackdropLoader message="Loading dashboard..." />
//   }

//   return <div>Dashboard Content</div>
// }


export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-1">
        Dashboard
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Manage your uploaded datasets and processing jobs.
      </p>

      <FilesTable />
    </div>
  )
}
