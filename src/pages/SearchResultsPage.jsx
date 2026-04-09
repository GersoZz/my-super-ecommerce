import { useSearchParams } from 'react-router-dom'

function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  return <div>SearchResultsPage: {query}</div>
}

export default SearchResultsPage
