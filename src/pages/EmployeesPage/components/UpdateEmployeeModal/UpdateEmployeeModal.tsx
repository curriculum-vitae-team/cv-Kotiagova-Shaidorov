import React from 'react'

import { Modal } from 'antd'

import { useOptions } from '@/components/UpdateEmployeeForm/hooks/useOptions'
import { UpdateEmployeeFormValues } from '@/components/UpdateEmployeeForm/types'
import UpdateEmployeeForm from '@/components/UpdateEmployeeForm/UpdateEmployeeForm'

import { useAppSelector } from '@/state'

type UpdateEmployeeModalProps = {
  handleUpdateEmployee: (formValues: UpdateEmployeeFormValues) => void
  isUpdateEmployeeModalOpen: boolean
  setIsUpdateEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateEmployeeModal: React.FC<UpdateEmployeeModalProps> = ({
  handleUpdateEmployee,
  isUpdateEmployeeModalOpen,
  setIsUpdateEmployeeModalOpen
}) => {
  const selectedEmployee = useAppSelector((state) => state.selectedEmployee)
  const { departments, positions } = useOptions()

  const handleSubmit = (formValues: UpdateEmployeeFormValues) => {
    handleUpdateEmployee(formValues)
  }

  const initialValues = {
    first_name: selectedEmployee.profile.first_name,
    last_name: selectedEmployee.profile.last_name,
    departmentId: selectedEmployee.department?.id,
    positionId: selectedEmployee.position?.id
  }

  return (
    <Modal
      centered
      footer={null}
      title='Input Employee Info'
      open={isUpdateEmployeeModalOpen}
      onCancel={() => {
        setIsUpdateEmployeeModalOpen(false)
      }}
    >
      <UpdateEmployeeForm
        positions={positions}
        departments={departments}
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        canEdit
      />
    </Modal>
  )
}

export default UpdateEmployeeModal
