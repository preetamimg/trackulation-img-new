import ErrorBoundary from "@/app/_components/ErrorBoundary"
import Login from "@/app/_pages/auth/Login"

const page = () => {
  return (
    <>
      <ErrorBoundary>
        <Login/>
      </ErrorBoundary>
    </>
  )
}

export default page