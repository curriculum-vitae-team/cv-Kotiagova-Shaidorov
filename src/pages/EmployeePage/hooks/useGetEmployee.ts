import { useState } from 'react'
import { bindActionCreators } from 'redux'

import { useLazyQuery } from '@apollo/client'

import { EMPLOYEE_QUERY } from '@/GraphQL/queries'
import { actionCreators, useAppDispatch } from '@/state'

const useGetEmployee = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [getEmployeeQuery] = useLazyQuery(EMPLOYEE_QUERY)
  const dispatch = useAppDispatch()

  const { setSelectedEmployee } = bindActionCreators(actionCreators, dispatch)

  const getEmployee = (id: string) => {
    setIsFetching(true)
    getEmployeeQuery({
      variables: {
        id: id
      }
    })
      .then(({ data }) => {
        setSelectedEmployee(data.user)
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { getEmployee, isFetching }
}

export default useGetEmployee
