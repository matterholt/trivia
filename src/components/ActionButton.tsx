import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ActionButtonProps {
    name: string
    styleAttributes: string
    clickAction: () => void
    isDisabled: boolean
    children : React.ReactNode
}

const dynamicStyle = ({customStyle}: {customStyle:string}) =>
  css`
    ${customStyle};
  `

const CustomButton = styled.button`
${dynamicStyle}
`

const ActionButton = ({ name,styleAttributes,clickAction, isDisabled,children }: ActionButtonProps) => {
    return(
        <CustomButton
            customStyle={styleAttributes }
            name={name }
            disabled={isDisabled?  true : false }
            onClick={clickAction}>
            {children}
    </CustomButton>
)}
            
export default ActionButton