import { Button, Form, Input, Modal } from 'antd'
import React, { useEffect } from 'react'

type UpdateEmployeeModalProps = {
  selectedEmployee: EmployeesPageUser
  handleUpdateEmployee: (values) => void
  isUpdateEmployeeModalOpen: boolean
  setIsUpdateEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateEmployeeModal: React.FC<UpdateEmployeeModalProps> = ({
  selectedEmployee,
  handleUpdateEmployee,
  isUpdateEmployeeModalOpen,
  setIsUpdateEmployeeModalOpen
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    return () => form.resetFields()
  })

  const handleSubmit = (values) => {
    handleUpdateEmployee({
      departmentId: values.departmentId ?? '',
      positionId: values.positionId ?? '',
      profile: {
        first_name: values.first_name,
        last_name: values.last_name,
        skills: [],
        languages: []
      },
      cvsIds: []
    })
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
      <Form form={form} onFinish={handleSubmit} initialValues={initialValues}>
        <Form.Item name='first_name'>
          <Input placeholder={'First Name'} />
        </Form.Item>
        <Form.Item name='last_name'>
          <Input placeholder={'Last Name'} />
        </Form.Item>
        <Form.Item name='departmentId'>
          <Input placeholder={'Department id'} />
        </Form.Item>
        <Form.Item name='positionId'>
          <Input placeholder={'Position id'} />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UpdateEmployeeModal
