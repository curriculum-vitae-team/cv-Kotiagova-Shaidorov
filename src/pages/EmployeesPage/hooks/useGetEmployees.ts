import { useEffect } from 'react'
import { bindActionCreators } from 'redux'

import { EMPLOYEES_QUERY } from '@/GraphQL/queries'
import { actionCreators, useAppDispatch } from '@/state'
import { useLazyQuery } from '@apollo/client'

const useFetchEmployees = () => {
  const [employees] = useLazyQuery(EMPLOYEES_QUERY)
  const dispatch = useAppDispatch()

  const { setEmployeeList, setIsLoading } = bindActionCreators(actionCreators, dispatch)

  const fetchEmployees = () => {
    setIsLoading(true)
    employees()
      .then((res) => {
        setEmployeeList(res.data.users)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return [fetchEmployees]
}

export default useFetchEmployees