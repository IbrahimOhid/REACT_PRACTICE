

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-col space-y-4 text-center">
        <div className="text-red-600 text-xl font-medium">404! Not Found</div>
        <div className="text-5xl font-medium">Page not found</div>
        <div className="text-gray-500">
          Sorry, the page you're looking for isn't available.
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;
