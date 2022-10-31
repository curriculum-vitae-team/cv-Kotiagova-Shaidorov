import React from 'react'
import 'antd/dist/antd.css'
import AppTabs from './AppTabs'

function example() {
  console.log('click')
}

export default {
  title: 'UI/tabs/AppTabs',
  component: AppTabs,
  argTypes: {
    handler: {
      action: 'handler',
      type: 'any',
      description: 'Обработчик клика',
      defaultValue: example
    },
    titles: {
      type: 'any[]',
      defaultValue: [11, 22, 33]
    },
    contents: {
      type: 'any[]',
      defaultValue: [
        1111111111,
        <div style={{ backgroundColor: 'lime' }}> 22 22 2 2 </div>,
        'djsf d k half jlzh csahc sjh cjhzcl j x '
      ]
    }
  }
}

const Template = (arg) => <AppTabs {...arg} />

export const Default = Template.bind({})
